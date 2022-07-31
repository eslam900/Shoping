import React from "react";

const Information = () => {
  return (
    <div className="col-lg-6 col-md-6 col-12">
      <h6 className="text-danger fw-bold text-uppercase align-items-center">
        information
      </h6>
      <h1 className="fw-bold" style={{ fontSize: "45px" }}>
        Contact Us
      </h1>
      <p className="text-muted card-body pe-5">
        As you might expect of a company that began as a high-end interiors
        contractor, we pay strict attention.
      </p>
      <div>
        <h4 className="fw-bold">America</h4>
        <p className=" card-body">
          195 E Parker Square Dr, Parker,CO 801
          <br />
          +43 982-314-0958
        </p>
      </div>
      <div>
        <h4 className="fw-bold">France</h4>
        <p className=" card-body">
          109 Avenue Léon, 63 Clermont-Ferrand
          <br /> +12 345-423-9893
        </p>
      </div>
    </div>
  );
};

export default Information;
