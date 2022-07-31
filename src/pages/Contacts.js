import React, { Fragment } from "react";
import Header from "../component/Header";
import Information from "../component/Information";
import Form from "../component/Form";
import Map from "../component/Map";
import Footer from "../component/Footer";

const Contacts = () => {
  return (
    <Fragment>
      <Header />
      <Map />
      <div className="container-sm d-flex flex-wrap gap-4 gap-md-0">
        <Information />
        <Form />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contacts;
