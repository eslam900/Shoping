import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data/data.js";
import { add, update } from "../redux/index.js";

const CardShop = ({ item, id }) => {
  const dispatch = useDispatch();
  const { CarData } = useSelector((state) => state.Add_To_Car);
  const handelCar = () => {
    const carData = data.find((item) => item.id === id);
    const check = CarData.find((item) => item.id === id);
    if (check) {
      const updateQty = CarData.map((x) =>
        x.id === id ? { ...x, qty: x.qty + 1 } : x
      );
      dispatch(update(updateQty));
    } else {
      dispatch(add(carData));
    }
  };

  return (
    <div className="card col-lg-3 col-sm-6 col-12 border-0 mt-5 p-3">
      <img className="card-img-top" src={item.image} alt="...." role="button" />
      <div className="card-body">
        <h6 className="card-title">{item.title}</h6>
        <h6 className="fw-bold">{`$${item.price}`}</h6>
        <div className=" text-danger fw-bold" role="button" onClick={handelCar}>
          + Add To Car
        </div>
      </div>
    </div>
  );
};

export default CardShop;
