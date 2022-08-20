import React from "react";
import logo from "../img/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
const Header = () => {
  const { CarData } = useSelector((state) => state.Add_To_Car);
  const getTotal = () => {
    const sumQty = [];
    CarData.map((x) => sumQty.push(x.qty * x.price));

    return sumQty.reduce((x, y) => x + y).toFixed(2);
  };

  return (
    <nav className="navbar bg-light navbar-expand-md navbar-light p-3">
      <div className="header container">
        <img className="navbar-brand" src={logo} alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <Link
              className="text-dark text-decoration-none position-relative"
              to="/Shop/ShopingCar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              <span className="text-danger fw-bold position-absolute start-50 top-50 translate-middle mt-1">
                {CarData.length < 10 ? `0${CarData.length}` : CarData.length}
              </span>
            </Link>
            <div className="fw-bold">
              {CarData.length <= 0 ? "$0.00" : `$ ${getTotal()}`}
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body justify-content-md-around">
            <ul className="navbar-nav gap-md-2 gap-lg-3 gap-sm-4 ">
              <li className="nav-item">
                <NavLink
                  className="masterLink nav-link pb-1 fs-5 fw-bold position-relative"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="masterLink nav-link pb-1 fs-5 fw-bold position-relative"
                  to="/Shop"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="masterLink nav-link fs-5 pb-1 fw-bold position-relative"
                  to="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </NavLink>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="dropdown-item">
                    <Link className="nav-link text-light" to="/AboutUs">
                      About Us
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="nav-link text-light" to="/Shop/productDetails">
                      Shop Details
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="nav-link text-light" to="/Shop/ShopingCar">
                      Shoping Car
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="nav-link text-light" to="/Shop/CheckOut">
                      Chek Out
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="nav-link text-light" to="#">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="masterLink nav-link pb-1 fs-5 fw-bold position-relative"
                  to="/Blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="masterLink nav-link pb-1 fs-5 fw-bold position-relative"
                  to="/Contacts"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center justify-content-center gap-lg-4 gap-md-3 gap-5 pb-md-0">
              <Link
                className="text-dark text-decoration-none position-relative d-none d-md-block"
                to="/Shop/ShopingCar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <span className="fw-bold position-absolute start-50 top-50 translate-middle mt-1">
                  {CarData.length < 10 ? `${CarData.length}` : CarData.length}
                </span>
              </Link>
              <div className="fw-bold text-nowrap  d-none d-md-block">
                {CarData.length <= 0 ? "$0.00" : `$ ${getTotal()}`}
              </div>
              <div className="input-group flex-nowrap d-md-none d-lg-flex mt-4 mt-md-0">
                <span className="input-group-text" id="addon-wrapping">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Searche"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
