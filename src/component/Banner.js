import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="mt-5 container">
      <div className="row">
        <div className="box_1 col-lg-7 offset-lg-4 position-relative mt-5">
          <div className="img_Banner float-md-end float-none">
            <img src={require("../img/banner/banner-1.jpg")} alt="..." />
          </div>
          <div className="textBanner position-absolute top-50 translate-middle-y">
            <h2 className="fs-1 fw-bold">Clothing Collections 2030</h2>
            <Link
              className="fw-bold text-dark text-decoration-none position-relative pb-1"
              to="Shop"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="box_2 col-xl-5 col-12 mt-md-5 mt-xl-0">
          <div className="img_Banner">
            <img src={require("../img/banner/banner-2.jpg")} alt="..." />
          </div>
          <div className="textBanner">
            <h2 className="fs-1 fw-bold">Accessories</h2>
            <Link
              className="fw-bold text-dark text-decoration-none position-relative pb-1"
              to="Shop"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="box_3 col-xl-7 col-12 position-relative align-self-end mb-5">
          <div className="img_Banner text-end">
            <img src={require("../img/banner/banner-3.jpg")} alt="..." />
          </div>
          <div className="textBanner position-absolute top-50 translate-middle-y">
            <h2 className="fs-1 fw-bold">Shoes Spring 2030</h2>
            <Link
              className="fw-bold text-dark text-decoration-none position-relative pb-1"
              to="/Shop"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
