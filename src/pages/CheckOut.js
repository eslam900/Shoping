import React from "react";
import Header from "../component/Header";
import ChechForms from "../component/CheckForms";
import Receipt from "../component/Receipt";
import Footer from "../component/Footer";

const CheckOut = () => {
  return (
    <div>
      <Header />
      <div className="container d-md-flex mt-5">
        <ChechForms />
        <Receipt />
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
