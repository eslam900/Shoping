import React from "react";

const Map = () => {
  return (
    <div className=" mb-5">
      <iframe
        className="w-100"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d202309.8709809075!2d-95.665!3d37.6!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1658350749813!5m2!1sen!2sbd"
        style={{ border: "0", height: "500px" }}
        title="ox"
      ></iframe>
    </div>
  );
};

export default Map;
