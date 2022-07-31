import React from "react";

const CheckForms = () => {
  return (
    <div className="col-lg-8 col-md-6 col-12 pe-3">
      <h5>BILLING DETAILS</h5>
      <hr />
      <form className="">
        <div className=" d-lg-flex w-100 justify-content-between mb-4">
          <div className="col-lg-6 pe-lg-3">
            <label className="form-label">
              Fist Name<span className="text-danger">*</span>
            </label>
            <input className="w-100 form-control" type="text" />
          </div>
          <div className="col-lg-6 ps-lg-3">
            <label className="form-label">
              Last Name<span className="text-danger">*</span>
            </label>
            <input className="w-100 form-control mb-4" type="text" />
          </div>
        </div>
        <label className="form-label">
          Country<span className="text-danger">*</span>
        </label>
        <input className="col-12 form-control mb-4" type="text" />
        <label className="form-label">
          Address<span className="text-danger">*</span>
        </label>
        <input className="col-12 form-control mb-3" type="text" />
        <input className="col-12 form-control mb-4" type="text" />
        <label className="form-label">
          Country/State<span className="text-danger">*</span>
        </label>
        <input className="col-12 form-control mb-4" type="text" />
        <label className="form-label">
          Postcode / ZIP<span className="text-danger">*</span>
        </label>
        <input className="col-12 form-control mb-4" type="text" />
        <div className=" d-lg-flex w-100 justify-content-between">
          <div className="col-lg-6 pe-lg-3 mb-4">
            <label className="form-label">
              Phone<span className="text-danger">*</span>
            </label>
            <input className="w-100 form-control" type="text" />
          </div>
          <div className="col-lg-6 ps-lg-3">
            <label className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input className="w-100 form-control" type="text" />
          </div>
        </div>
        <input className="form-check-input mb-4 me-2" type="checkbox" />
        <label className="form-check-label">Create an account?</label>
        <p>
          Create an account by entering the information below. If you are a
          returning customer please login at the top of the page
        </p>
        <label className="form-label">
          Account Password<span className="text-danger">*</span>
        </label>
        <input className="col-12 form-control mb-4" type="text" />
        <input className="form-check-input mb-4 me-2" type="checkbox" />
        <label className="form-check-label">
          Note about your order, e.g, special noe for delivery
        </label>
        <label className="form-label form-control mb-4">
          Order notes<span className="text-danger">*</span>
        </label>
        <input
          className="col-12 form-control"
          type="text"
          placeholder="Notes about your order, e.g. special notes for delivery"
        />
      </form>
    </div>
  );
};

export default CheckForms;
