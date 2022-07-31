import React from "react";
const SlidDetails = () => {
  return (
    <div style={{ background: "rgb(243,242,238)" }}>
      <div className="pt-5 pb-5 d-sm-flex container-xl align-items-center">
        <div
          className="nav nav-pills ps-sm-4 flex-sm-column flex-wrap gap-3"
          id="v-pills-tab"
          role="button"
        >
          <div
            className="active"
            id="v-pills-img1-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-img1"
          >
            <img src={require("../img/shop-details/thumb-1.png")} alt="..." />
          </div>
          <div
            className=""
            id="v-pills-img2-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-img2"
          >
            <img src={require("../img/shop-details/thumb-2.png")} alt="..." />
          </div>
          <div
            className=""
            id="v-pills-img3-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-img3"
          >
            <img src={require("../img/shop-details/thumb-3.png")} alt="..." />
          </div>
          <div
            className=""
            id="v-pills-img4-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-img4"
          >
            <img src={require("../img/shop-details/thumb-4.png")} alt="..." />
          </div>
        </div>
        <div
          className="tab-content flex-grow-1 text-center mt-5 mb-4 "
          id="v-pills-tabContent"
        >
          <div
            className="tab-pane fade show w-100  active"
            id="v-pills-img1"
            role="tabpanel"
          >
            <img
              style={{ width: "260px" }}
              src={require("../img/shop-details/product-big-2.png")}
              alt="..."
            />
          </div>
          <div className="tab-pane fade " id="v-pills-img2" role="tabpanel">
            <img
              style={{ width: "275px" }}
              src={require("../img/shop-details/product-big-3.png")}
              alt="..."
            />
          </div>
          <div className="tab-pane fade " id="v-pills-img3" role="tabpanel">
            <img
              style={{ width: "400px" }}
              src={require("../img/shop-details/product-big.png")}
              alt="..."
            />
          </div>
          <div className="tab-pane fade " id="v-pills-img4" role="tabpanel">
            <img
              style={{ width: "340px" }}
              src={require("../img/shop-details/product-big-4.png")}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidDetails;
