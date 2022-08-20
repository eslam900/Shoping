import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CarTotal = () => {
  const { CarData } = useSelector((state) => state.Add_To_Car);

  const getTotal = () => {
    const sumQty = [];
    CarData.map((x) => sumQty.push(x.qty * x.price));

    return sumQty.reduce((x, y) => x + y).toFixed(2);
  };

  return (
    <div className="pt-2 col-lg-4 col-12 ms-lg-5">
      <h6 className="fw-bold mb-4">DISCOUNT CODES</h6>
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Coupon Code"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          style={{ height: "50px" }}
        />
        <button className="input-group-text btn btn-dark" id="basic-addon2">
          APPLAY
        </button>
      </div>
      <div className="card p-3" style={{"backgroundColor":"rgb(243,242,238)"}}>
        <h6 className="fw-bold ps-4 pt-4">CART TOTAL</h6>
        <div className="d-flex align-items-center justify-content-between p-4">
          <div>Subtotal</div>
          <div className="fw-bold">{`$ ${getTotal()}`}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between p-4">
          <div>Total</div>
          <div className="fw-bold">{`$ ${getTotal()}`}</div>
        </div>
        <Link className="p-4" to="/Shop/CheckOut">
          <button className="btn btn-dark w-100">PROCEED TO CHECKOUT</button>
        </Link>
      </div>
    </div>
  );
};

export default CarTotal;
