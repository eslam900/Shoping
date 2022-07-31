import React, { Fragment } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
import Banner from "../component/Banner";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slider />
      <Banner />
      <Footer />
    </Fragment>
  );
};

export default Home;
