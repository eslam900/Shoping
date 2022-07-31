import React from "react";
import { Link } from "react-router-dom";
import NavDetails from "./NavDetails";

const InfoDetails = () => {
  return (
    <div className="text-center mt-5 pt-5 container-xl">
      <h3 className="fw-bold text-capitalize">Hooded thermal anorak</h3>
      <div className="col-sm-8 m-auto ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(247,148,29)"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(247,148,29)"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(247,148,29)"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(247,148,29)"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgb(247,148,29)"
          className="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                role="button"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                role="button"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            add to wishlist
          </Link>
          <Link className="text-dark text-decoration-none" to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-right me-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
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
