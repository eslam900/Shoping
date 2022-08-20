import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/footer-logo.png";
import logo_1 from "../img/payment.png";
import { BsHeart } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black pt-5 mt-5">
      <div className="container-sm d-flex justify-content-between flex-wrap">
        <div className="col-lg-3 col-md-5 col-sm-6 col-12 mb-4">
          <img className="mb-3" src={logo} alt="footerImage" />
          <p className=" card-title text-secondary fw-bold m-3 ms-0">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
          <img className="mt-3" src={logo_1} alt="paymentImage" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-4 ps-md-5">
          <h5 className="text-light fw-bold text-uppercase">shopping</h5>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                clothing store
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                trending shoes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                accessories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                sale
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-4">
          <h5 className="text-light fw-bold text-uppercase">shopping</h5>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                payment methods
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                {" "}
                delivary
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-secondary text-capitalize" to="#">
                return & exchanges
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-5 col-sm-6 col-12 mb-4">
          <h5 className="text-light fw-bold text-uppercase">newletter</h5>
          <p className=" card-title text-secondary fw-bold m-4 ms-0">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <input
            className="w-100 bg-transparent border-bottom p-3 ps-0 text-secondary text-capitalize"
            type="email"
            placeholder="your email"
            style={{ border: "none", outline: "none" }}
          ></input>
        </div>
      </div>
      <hr className="bg-light container-sm mt-sm-5" />
      <div className="text-center text-secondary fw-bold p-2">
        <p>
          Copyright © 2022 All rights reserved | This template is made with
          <span className="text-danger">
            {" "}
            <BsHeart style={{"height":"1.25em","width":"1.25em"}}/>
            {" "}
            by Colorlib ,
            <span className=" text-warning text-capitalize d-block d-sm-inline">
              {" "}
              eslam rouzika
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
