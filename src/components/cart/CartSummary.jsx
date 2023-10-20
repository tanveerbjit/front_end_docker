import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const CartSummary = ({totalDetail}) => {

  const navigate = useNavigate()

  const redirect = ()=>{
    navigate("/user/voucher");
  }
  return (
    <div className="bg-light p-30 mb-5">
      <div className="border-bottom pb-2">
        <div className="d-flex justify-content-between mb-3">
          <h6>Subtotal</h6>
          <h6>${totalDetail.totalValue}</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6 className="font-weight-medium">Shipping</h6>
          <h6 className="font-weight-medium">${0}</h6>
        </div>
      </div>
      <div className="pt-2">
        <div className="d-flex justify-content-between mt-2">
          <h5>Total</h5>
          <h5>${totalDetail.totalValue}</h5>
        </div>
        <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={redirect}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
