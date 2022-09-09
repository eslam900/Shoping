import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, update } from "../redux/index";
import { BsCaretLeftFill, BsCaretRightFill, BsXCircle } from "react-icons/bs";

const CardCar = ({ item, id }) => {
  // remove item from car
  const dispatch = useDispatch();
  const { CarData } = useSelector((state) => state.Add_To_Car);
  const deleteItem = () => {
    const NewData = CarData.filter((items) => items.id !== id);
    dispatch(remove(NewData));
  };

  // increment & decrement quantity of object
  const handelQuantity = (type) => {
    if (type === "increment") {
      const updateQty = CarData.map((x) =>
        x.id === id ? { ...x, qty: x.qty + 1 } : x
      );
      dispatch(update(updateQty));
    } else {
      const updateQty = CarData.map((x) =>
        x.id === id && x.qty > 1 ? { ...x, qty: x.qty - 1 } : x
      );
      dispatch(update(updateQty));
    }
  };
  return (
    <tbody>
      <tr>
        <td className="pt-sm-4 pb-sm-4" style={{ width: "400px" }}>
          <div className=" w-25 float-sm-start me-5">
            <img style={{ width: "85px" }} src={item.image} alt="..." />
          </div>
          <div className="pt-sm-4 ps-sm-4">
            <div>{item.title}</div>
            <div className="fw-bold">{`$ ${item.price}`}</div>
          </div>
        </td>
        <td className="ps-4 lh" style={{ width: "200px", lineHeight: "6" }}>
          <BsCaretLeftFill
          style={{"height":"1.25em","width":"1.25em"}}
            role="button"
            onClick={() => handelQuantity("decrement")}
          />
          <span className="fs-5 fw-bold">{item.qty}</span>
          <BsCaretRightFill
          style={{"height":"1.25em","width":"1.25em"}}
            role="button"
            onClick={() => handelQuantity("increment")}
          />
        </td>
        <td className="ps-md-2 pt-4" style={{ width: "200px", lineHeight: "6" }}>
          <div className="fw-bold">
            {"$ " + Math.round(`${item.price * item.qty}`)}
          </div>
        </td>
        <td style={{ paddingTop: "57px" }}>
          <BsXCircle
            role="button"
            onClick={deleteItem}
            style={{"height":"1.5em","width":"1.5em"}}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default CardCar;
