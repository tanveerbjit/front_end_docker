

import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

function CartCount() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
      <Link to="/cart" className="btn px-0 ml-3">
        <i className="fas fa-shopping-cart text-primary fa-lg"></i>
        <span
          className="badge text-secondary border border-secondary rounded-circle"
          style={{ paddingBottom: "2px" }}
        >
          {cart.cart}
        </span>
      </Link>
    </div>
  );
}

export default CartCount;


