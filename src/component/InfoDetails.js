import React from "react";
import { Link } from "react-router-dom";
import NavDetails from "./NavDetails";
import { BsStarFill, BsStar, BsChevronUp, BsChevronDown, BsHeartFill, BsArrowLeftRight } from "react-icons/bs";

const InfoDetails = () => {
  return (
    <div className="text-center mt-5 pt-5 container-xl">
      <h3 className="fw-bold text-capitalize">Hooded thermal anorak</h3>
      <div className="col-sm-8 m-auto ">
      <BsStarFill fill="rgb(247,148,29)"/>
      <BsStarFill fill="rgb(247,148,29)"/>
      <BsStarFill fill="rgb(247,148,29)"/>
      <BsStarFill fill="rgb(247,148,29)"/>
      <BsStar fill="rgb(247,148,29)"/>
        <span> - 5 Reviews</span>
        <h2 className="fw-bold mt-4">
          $270.00{" "}
          <span className=" text-decoration-line-through text-secondary fs-5">
            70.00
          </span>{" "}
        </h2>
        <p className="mt-4">
          Coat with quilted lining and an adjustable hood. Featuring long
          sleeves with adjustable cuff tabs, adjustable asymmetric hem with
          elastic side tabs and a front zip fastening with placket.
        </p>
        <div className="d-flex align-items-center justify-content-around mt-5 flex-column gap-5 flex-md-row">
          <div>
            <span className="me-3">Size:</span>
            <span className="fw-bold p-2 border me-2" role="button">
              XLL
            </span>
            <span className="fw-bold p-2 border me-2" role="button">
              XL
            </span>
            <span className="fw-bold p-2 pe-3 ps-3 border me-2" role="button">
              L
            </span>
            <span className="fw-bold p-2 pe-3 ps-3 border me-2" role="button">
              S
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="me-2">Color:</span>
            <span
              className="bg-black rounded-circle d-inline-block border"
              role="button"
              style={{ width: "30px", height: "30px" }}
            ></span>
            <span
              className="bg-info rounded-circle d-inline-block border"
              role="button"
              style={{ width: "30px", height: "30px" }}
            ></span>
            <span
              className="bg-warning rounded-circle d-inline-block border"
              role="button"
              style={{ width: "30px", height: "30px" }}
            ></span>
            <span
              className="bg-danger rounded-circle d-inline-block border"
              role="button"
              style={{ width: "30px", height: "30px" }}
            ></span>
            <span
              className="bg-light rounded-circle d-inline-block border"
              role="button"
              style={{ width: "30px", height: "30px" }}
            ></span>
          </div>
        </div>
        <div className="d-flex align-content-center justify-content-center gap-5 mt-5 ">
          <div className="d-flex align-items-center justify-content-center gap-4 border ps-5 pe-2 p-2 h-75 fw-bold">
            <span>1</span>
            <div className="d-flex flex-column align-items-center">
              <BsChevronUp role="button"/>
              <BsChevronDown role="button"/>
            </div>
          </div>
          <button className="btn btn-dark text-uppercase pe-5 ps-5 p-3">
            add to car
          </button>
        </div>
        <div
          className="mt-4 d-flex justify-content-center text-uppercase gap-5"
          style={{ letterSpacing: "1.5px" }}
        >
          <Link className="text-dark text-decoration-none" to="#">
          <BsHeartFill className="me-2"/>
            add to wishlist
          </Link>
          <Link className="text-dark text-decoration-none" to="#">
            <BsArrowLeftRight className="me-2"/>
            add to compare
          </Link>
        </div>
        <div className="mt-4">
          <h5 className="fw-bold mb-4">Guaranteed Safe Checkout</h5>
          <img
            src={require("../img/shop-details/details-payment.png")}
            alt="...."
          />
          <div className="fw-bold mt-5">
            <div>
              <span className=" text-secondary opacity-50 fw-light">SKU:</span>
              3812912
            </div>
            <div>
              <span className=" text-secondary opacity-50 fw-light">
                Categories:
              </span>{" "}
              Clothes
            </div>
            <div>
              <span className=" text-secondary opacity-50 fw-light">Tag:</span>
              Clothes, Skin, Body
            </div>
          </div>
        </div>
      </div>
      <NavDetails />
    </div>
  );
};

export default InfoDetails;
