import React from "react";
import { useSelector } from "react-redux";

const Receipt = () => {
  const { CarData } = useSelector((state) => state.Add_To_Car);

  const getTotal = () => {
    const sumQty = [];
    CarData.map((x) => sumQty.push(x.qty * x.price));
    if (sumQty.length > 0) {
      return sumQty.reduce((x, y) => x + y).toFixed(2);
    }
  };

  return (
    <section
      className="col-lg-4 col-md-6 col-12 h-100 mt-5 ms-md-3 p-4"
      style={{ backgroundColor: "rgb(243,242,238)" }}
    >
      <h3>YOUR ORDER</h3>
      <hr />
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>Product</div>
          <div>Total</div>
        </div>
        <ol>
          {CarData.map((item, idx) => (
            <div key={idx} className="d-flex justify-content-between mb-3">
              <li>{item.title}</li>
              <div>{`$ ${(item.price * item.qty).toFixed(2)}`}</div>
            </div>
          ))}
        </ol>
        <hr />
        <div className="d-flex justify-content-between mb-3">
          <div>Subtotal</div>
          <div className="text-danger">
            {CarData.length > 0 ? `$ ${getTotal()}` : "$ 00.00"}
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div>Total</div>
          <div className="text-danger">
            {CarData.length > 0 ? `$ ${getTotal()}` : "$ 00.00"}
          </div>
        </div>
        <hr />
        <input className="form-check-input mb-4 me-2" type="checkbox" />
        <label className="form-check-label">Create an account?</label>
        <p>
          Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <input className="form-check-input mb-4 me-2" type="checkbox" />
        <label className="form-check-label">Check Payment</label>
        <br />
        <input className="form-check-input mb-4 me-2" type="checkbox" />
        <label className="form-check-label">Paypal</label>
        <button className="btn btn-dark w-100">PLACE ORDER</button>
      </div>
    </section>
  );
};

export default Receipt;
