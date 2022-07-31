import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, update } from "../redux/index";

const CardCar = ({ item, id }) => {
  // remove item from car
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.addTo);
  const deleteItem = () => {
    const NewData = value.filter((items) => items.id !== id);
    dispatch(remove(NewData));
  };

  // increment & decrement quantity of object
  const handelQuantity = (type) => {
    if (type === "increment") {
      const updateQty = value.map((x) =>
        x.id === id ? { ...x, qty: x.qty + 1 } : x
      );
      dispatch(update(updateQty));
    } else {
      const updateQty = value.map((x) =>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
            role="button"
            onClick={() => handelQuantity("decrement")}
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <span className="fs-5 fw-bold">{item.qty}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
            role="button"
            onClick={() => handelQuantity("increment")}
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </td>
        <td className="ps-4 pt-4" style={{ width: "200px", lineHeight: "6" }}>
          <div className="fw-bold">
            {"$ " + Math.floor(`${item.price * item.qty}`)}
          </div>
        </td>
        <td style={{ paddingTop: "57px" }}>
          <svg
            onClick={deleteItem}
            style={{
              background: "rgb(243,242,238)",
              border: "none",
              borderRadius: "50%",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="black"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
            role="button"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </td>
      </tr>
    </tbody>
  );
};

export default CardCar;
