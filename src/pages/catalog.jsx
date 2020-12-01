import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import TitlePage from "../Components/catalog/title_page";
import Element from "../Components/catalog/element";
import CategoryFilter from "../Components/catalog/filter/category";
import BrandFilter from "../Components/catalog/filter/brand";
import PriceFilter from "../Components/catalog/filter/price";
import ColorFilter from "../Components/catalog/filter/color";
import SearchProducts from "../Components/catalog/filter/search";
import {fetchFilterData, filterBrand, filterColor, filterPrice} from "../store/action_creatores";
import {CATALOG} from "../router/url";
import {Link} from "react-router-dom";


function Catalog(props) {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchFilterData())},[])

    const catalogList = useSelector((store) => store.app.catalogList);
    const categoryList = useSelector((store) => store.app.categoryList);
    const brandList = useSelector((store) => store.app.brandList);
    const colorList = useSelector((store) => store.app.colorList);
    const filterColorID = useSelector((store) => store.app.filter.color);
    const filterBrandID = useSelector((store) => store.app.filter.brand);
    const priceRange = useSelector((store) => store.app.priceRange[0]);

    const rangeData = useSelector((store) => store.app.filter.price);

    // console.log('filterCategory -> ',filterCategory);
    // console.log('props ->', props);
    console.log(priceRange);

    function filterPrdCategory () {
        let cat = null;
        categoryList.forEach((item) => {
            if (item.url === props.match.params.categoryName)
            {cat=item.id}
        });
        return (cat);
    }
    const catID = filterPrdCategory();

    let finalCatalog = catalogList;

    if (props.match.params.categoryName) {
        finalCatalog = finalCatalog.filter((item) => item.category === catID);
    }

    if (filterColorID) {
        finalCatalog = finalCatalog.filter((item) => item.colors === filterColorID);
    }

    if (filterBrandID) {
        finalCatalog = finalCatalog.filter((item) => item.brand === filterBrandID);
    }

    function handleClickRessetColor (e) {
        dispatch(filterColor(e.target.getAttribute('')))
    }

    function handleClickRessetBrand (e) {
        dispatch(filterBrand(e.target.getAttribute('')))
    }

    function handleClickRessetPrice (e) {
        dispatch(filterPrice([priceRange.priceMin, priceRange.priceMax]))
    }

    return (
        <>
        {/*<!-- Title Page -->*/}
        <TitlePage />

    {/* !--Content page-- */}
    <section className="bgwhite p-t-55 p-b-65">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                    <div className="leftbar p-r-20 p-r-0-sm">
                        {/* <!--  -->*/}
                        <h4 className="m-text14 p-b-7">
                            Категории
                        </h4>
                        <ul className="p-b-54">
                            {categoryList.map((item) => {
                                return (<CategoryFilter
                            title = {item.title}
                            url = {item.url}
                            id = {item.id}
                            />
                            )})}
                            <li className="p-t-4">
                            <Link to={CATALOG}>
                                <button
                                    className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                >
                                    все категории
                                </button>
                            </Link>
                            </li>
                        </ul>


                        <h4 className="m-text14 p-b-7">
                            Бренды
                        </h4>

                        <ul className="p-b-54">
                            {brandList.map((item) => {
                                return (<BrandFilter
                            title = {item.title}
                            id = {item.id}
                            />)}
                            )}
                            <li className="p-t-4">
                                    <button
                                        className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                        onClick={handleClickRessetBrand}
                                    >
                                        все категории
                                    </button>
                            </li>
                        </ul>


                        {/*<!--  -->*/}
                        <div className="filter-price p-t-22 p-b-50 bo3">

                            <div className="m-text15 p-b-17">
                                Цена
                            </div>

                            <PriceFilter
                                priceRangeMin={123312313}/>

                            <div className="flex-sb-m flex-w p-t-16">
                                <div className="w-size11">
                                    {/*<!-- Button -->*/}
                                    <button
                                        className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                        onClick={handleClickRessetPrice}
                                    >
                                        resset
                                    </button>
                                </div>

                                <div className="s-text3 p-t-10 p-b-10">
                                    Диапазон: $<span id="value-lower">{rangeData[0]}</span> - $<span id="value-upper">{rangeData[1]}</span>
                                </div>
                            </div>
                        </div>

                        <div className="filter-color p-t-22 p-b-50 bo3">
                            <div className="m-text15 p-b-12">
                                Цвет
                            </div>

                            <ul className="flex-w">
                                {
                                    colorList.map((item) =>
                                        <ColorFilter
                                        id = {item.id}
                                        color = {item.color}
                                        />
                                    )
                                }
                            </ul>
                            <div className="w-size11">
                                {/*<!-- Button -->*/}
                                <button
                                    className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4"
                                    onClick={handleClickRessetColor}
                                >
                                    resset
                                </button>
                            </div>
                        </div>


                        <SearchProducts/>


                    </div>
                </div>

                <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                    {/*<!--  -->*/}
                    <div className="flex-sb-m flex-w p-b-35">
                        <div className="flex-w">
                            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                <select className="custom-select" name="sorting">
                                    <option>Default Sorting</option>
                                    <option>Popularity</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>

                            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                                <select className="custom-select" name="sorting">
                                    <option>Price</option>
                                    <option>$0.00 - $50.00</option>
                                    <option>$50.00 - $100.00</option>
                                    <option>$100.00 - $150.00</option>
                                    <option>$150.00 - $200.00</option>
                                    <option>$200.00+</option>

                                </select>
                            </div>
                        </div>

                        <span className="s-text8 p-t-5 p-b-5">
							Showing 1–12 of 16 results
						</span>
                    </div>

                    {/*<!-- Product -->*/}
                    <div className="row">

                        {finalCatalog.map((item) =>
                            <Element
                            title = {item.title}
                            id = {item.id}
                            price = {item.price}
                            img_url = {item.img_url}
                            />
                        )}

                        {/*{catalogList.map((item) => {*/}
                        {/*    if (item.category === catID) {*/}
                        {/*    return (*/}
                        {/*        <Element*/}
                        {/*            title = {item.title}*/}
                        {/*            id = {item.id}*/}
                        {/*            price = {item.price}*/}
                        {/*            img_url = {item.img_url}*/}
                        {/*        />*/}
                        {/*    )} else {*/}
                        {/*        if (catID === null) {*/}
                        {/*            return (*/}
                        {/*                <Element*/}
                        {/*                    title={item.title}*/}
                        {/*                    id={item.id}*/}
                        {/*                    price={item.price}*/}
                        {/*                    img_url={item.img_url}*/}
                        {/*                />)*/}
                        {/*        }*/}
                        {/*    }*/}
                        {/*})}*/}

                    </div>

                    {/* <!-- Pagination -->*/}
                    <div className="pagination flex-m flex-w p-t-26">
                        <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                        <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default React.memo(Catalog);