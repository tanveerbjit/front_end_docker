import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import baseurl from "../../../../util/baseurl";
import axiosInstance from "../../../../util/axiosInstance";
import { setCart } from "../../../../store/slices/cart/cartSlice";
import ProductLink from "../../../common/ProductLink";

import { toast } from "react-toastify";

function ProductItem({ product }) {
  const [isCart, setIsCart] = useState(false);
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = localStorage.getItem("login");

  const pic =
    baseurl +
    (product.pic && product.pic.includes("public/")
      ? product.pic.replace("public/", "")
      : product.pic);

  const cartProduct = async (id) => {
    if (isCartDisabled) {
      return; // Do nothing if the cart button is disabled
    }
    if (!login) {
      toast.error("Please login first");
      return;
    }

    try {
      // Disable the cart button
      setIsCartDisabled(true);

      // Send a POST request with Axios
      const response = await axiosInstance.post("/user/cart", {
        itemId: id,
        quantity: 1,
      });

      if (response.status === 200) {
        toast.success("product added");
        const count = parseInt(localStorage.getItem("cart"));

        if (count) {
          localStorage.setItem("cart", count + 1);
          dispatch(setCart(count + 1));
        } else {
          localStorage.setItem("cart", 1);
          dispatch(setCart(1));
        }

        // Clear the isCartDisabled state after 2 seconds
        setTimeout(() => {
          setIsCartDisabled(false);
        }, 2000);
      } else {
        console.error("Error updating profile:", response.statusText);
        setIsCartDisabled(false);
      }
    } catch (error) {
      console.log(error.response);
      setIsCartDisabled(false);
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-6 pb-1 " key={product._id}>
      <div className="product-item bg-light mb-4">
        {/* Product image and actions */}

        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100 " src={pic} alt="Product" />
          <div className="product-action">
            <ProductLink
              className={"btn btn-outline-dark btn-square"}
              onClick={() => cartProduct(product._id)}
              payload={<i className="fa fa-shopping-cart"></i>}
              disabled={isCartDisabled}
            />
            <ProductLink
              className={"btn btn-outline-dark btn-square"}
              to={`product/detail/${product._id}`}
              payload={<i className="fa fa-search"></i>}
            />
          </div>
        </div>

        {/* Product details */}
        <div className="text-center py-4">
          <ProductLink
            className={"h6 text-decoration-none text-truncate"}
            to={`product/detail/${product._id}`}
            payload={product.name}
          />
          <div style={{ fontSize: "0.75rem" }}>
            <span style={{ fontWeight: "bold" }}>By:</span>{" "}
            {`${product.authorInfo[0].firstName} ${product.authorInfo[0].lastName}`}
          </div>

          <div className="d-flex align-items-center justify-content-center mt-2">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                alignItems: "center",
              }}
            >
              <i
                className="fa-solid fa-dollar-sign fa-xs"
                style={{ lineHeight: 1, display: "block" }}
              ></i>
              <h6 style={{ margin: 0, paddingLeft: "8px" }}>{product.price}</h6>
            </div>
          </div>
          <div style={{ fontSize: "0.75rem" }}>
            <span style={{ fontWeight: "bold" }}>stock:</span> {product.stock}
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            {Array.from({ length: 5 }, (_, index) => (
              <small
                key={index}
                className={`text-primary mr-1 ${
                  product.rating > index ? "fa fa-star" : "far fa-star"
                }`}
              ></small>
            ))}
            {product.num_of_people ? (
              <small>
                ({product.num_of_people ? product.num_of_people : 0})
              </small>
            ) : (
              ""
            )}
          </div>

          <div style={{ fontSize: "0.75rem" }}>
            <span style={{ fontWeight: "bold" }}>Publisher:</span> {product.publisherInfo[0].name}
          </div>
          <div style={{ fontSize: "0.75rem" }}>
            <span style={{ fontWeight: "bold" }}>Category:</span> {product.categoryInfo[0].name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
