import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardCar from "./CardCar";
import CarTotal from "./CarTotal";

const ShopCar = () => {
  const { value } = useSelector((state) => state.addTo);
  return value.length > 0 ? (
    <div className="container mt-5 d-lg-flex align-items-start">
      <div className="w-100">
        <table className="table">
          <thead>
            <tr>
              <th className="pb-3" scope="col" style={{ width: "" }}>
                PRODUCT
              </th>
              <th className="pb-3" scope="col" style={{ width: "" }}>
                QUANTITY
              </th>
              <th className="pb-3" scope="col" style={{ width: "" }}>
                TOTAL
              </th>
            </tr>
          </thead>
          {value.map((item) => (
            <CardCar key={item.id} item={item} id={item.id} />
          ))}
        </table>
        <div className="w-100 d-flex justify-content-center">
          <button
            className="btn btn-light fw-bold text-uppercase lh-lg mt-5 mb-5 "
            style={{ letterSpacing: "1.5px" }}
          >
            <Link className="text-dark text-decoration-none" to="/Shop">
              continue shopping
            </Link>
          </button>
        </div>
      </div>
      <CarTotal />
    </div>
  ) : (
    <div className="d-flex align-items-center justify-content-center vh-100 fw-bold fs-1 text-capitalize">
      no selected order
    </div>
  );
};

export default ShopCar;
