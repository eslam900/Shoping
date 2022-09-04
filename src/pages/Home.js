import React, { Fragment } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
import Banner from "../component/Banner";
import BestNew from "../component/NavBestNew";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slider />
      <Banner />
      <BestNew/>
      <Footer />
    </Fragment>
  );
};

export default Home;
