import React, { Fragment } from "react";
import ShopCar from "../component/ShopCar";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ShopingCar = () => {
  return (
    <Fragment>
      <Header />
      <ShopCar />
      <Footer />
    </Fragment>
  );
};

export default ShopingCar;
