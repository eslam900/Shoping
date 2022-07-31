import React from "react";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar3"
            viewBox="0 0 16 16"
          >
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
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
