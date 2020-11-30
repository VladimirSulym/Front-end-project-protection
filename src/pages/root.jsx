import React from 'react';
import Catalog from "./catalog";
import Slide1 from "../Components/slide1";
import Banner from "../Components/banner";
import NewProduct from "../Components/new_product";
import Banner2 from "../Components/banner2";
import Blog from "../Components/blog";
import Shipping from "../Components/shipping";

function Root(props) {
    return (
        <>
        {/*<!-- Slide1 -->*/}

        <Slide1 />

        {/*<!-- Banner -->*/}

        <Banner />

        {/*<!-- New Product -->*/}

        <NewProduct />

        {/*<!-- Banner2 -->*/}

        <Banner2 />

        {/*<!-- Blog -->*/}

        <Blog />

        {/*<!-- Shipping -->*/}
        <Shipping />
        </>
);
}

export default React.memo(Root);