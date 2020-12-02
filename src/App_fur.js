import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Topbar from "./Components/topbar";
import WrapHeader from "./Components/wrap_header";
import Slide1 from "./Components/slide1";
import Banner from "./Components/banner";
import NewProduct from "./Components/new_product";
import Banner2 from "./Components/banner2";
import Blog from "./Components/blog";
import Footer from "./Components/footer";
import Shipping from "./Components/shipping";
import {fetchData, fetchFilterData} from "./store/action_creatores";
import Catalog from "./pages/catalog";

function App_fur(props) {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchData())},[])
    useEffect(() => {dispatch(fetchFilterData())},[])

  return (
    <div>
      <header className="header1">
        {/*!--Header desktop --*/}
        <div className="container-menu-header">
          <Topbar />
          <WrapHeader />
        </div>
      </header>
        {props.children}
        {/*<!-- Footer -->*/}
      <Footer />
    </div>
  );
}

export default React.memo(App_fur);
