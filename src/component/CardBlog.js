import React from "react";
import { BsCalendar3 } from "react-icons/bs";


import { Link } from "react-router-dom";
import "../component/Blig.css";
const CardBlog = ({ el }) => {
  return (
    <div className="CardBlog col-lg-4 col-sm-6 col-12 p-3">
      <img className="w-100" src={el.Image} alt="..." />
      <div
        className="bg-white p-4 position-relative"
        style={{ width: "90%", left: "5%", bottom: "40px" }}
      >
        <div className="d-flex align-items-center gap-2 text-secondary opacity-50 mb-3">
        <BsCalendar3/>
          <p className="m-0">{el.date}</p>
        </div>
        <h5 className="fw-bold pe-4 mb-3">{el.title}</h5>
        <Link
          className="pb-2 fw-bold cardLink text-decoration-none text-black"
          to="#"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default CardBlog;
