import React from "react";
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

function App_fur(props) {
  return (
    <div>
      <header className="header1">
        {/*!--Header desktop --*/}
        <div className="container-menu-header">

          <Topbar />
            {props.children}
          {/*<WrapHeader />*/}

        </div>

      </header>

      {/*/!*<!-- Slide1 -->*!/*/}

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

      {/*<!-- Footer -->*/}
      <Footer />

    </div>
  );
}

export default React.memo(App_fur);
