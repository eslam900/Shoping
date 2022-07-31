import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
const Slider = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner carousel ">
        <div className="carousel-item active">
          <div className="slidContainer_1 d-block w-100">
            <div className=" slidInfo position-absolute top-50 translate-middle-y col-xl-5 col-lg-7 col-md-8 p-3 lh-lg">
              <p className="text-danger fs-4">summer collection</p>
              <h1 className="pb-4 fw-bold">fall - winter collections 2030</h1>
              <p className="">
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <Link className="btn btn-dark p-2 pe-4 ps-4 fs-4" to="/shop">
                <span className=" me-3">Shop now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slidContainer_2 d-block w-100">
            <div className=" slidInfo position-absolute top-50 translate-middle-y col-xl-5 col-lg-7 col-md-8 p-3 lh-lg">
              <p className="text-danger fs-4">summer collection</p>
              <h1 className="pb-4 fw-bold">fall - winter collections 2030</h1>
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </p>
              <Link className="btn btn-dark p-2 pe-4 ps-4 fs-4" to="#">
                <span className=" me-3">Shop now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className="prev carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="next carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
