import React, { Fragment } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
import Banner from "../component/Banner";
import BestAndNew from "../component/BestAndNew";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slider />
      <Banner />
      <BestAndNew/>
      <Footer />
    </Fragment>
  );
};

export default Home;
