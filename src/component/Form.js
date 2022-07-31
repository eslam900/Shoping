import React from "react";

const Form = () => {
  return (
    <div className="col-lg-6 col-md-6 col-12">
      <form className="d-flex flex-column justify-content-between gap-5">
        <input
          className="text-capitalize p-2 form-control "
          type="text"
          placeholder="name"
        ></input>
        <input
          className="text-capitalize p-2 form-control "
          type="email"
          placeholder="email"
        ></input>
        <textarea
          className="text-capitalize p-2 form-control"
          style={{ height: "150px" }}
          placeholder="massage"
        ></textarea>
        <button className="btn btn-dark text-uppercase col-7 btn-lg">
          send massage
        </button>
      </form>
    </div>
  );
};

export default Form;
