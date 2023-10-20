import React, { useState } from "react";
import axiosInstance from "../../util/axiosInstance";
import { useDispatch } from "react-redux";
import { setCart } from "../../store/slices/cart/cartSlice";
import { toast } from "react-toastify";
import Button from "../common/Button ";

function ProductInfo({ info, id }) {
  const dispatch = useDispatch();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const login = localStorage.getItem("login");

  const cartProduct = async () => {
    if (isAddingToCart) {
      return; // Do nothing if the button is disabled
    }
    if (!login) {
      toast.error("Please login first");
      return;
    }
    try {
      setIsAddingToCart(true);

      // Send a POST request with Axios
      const response = await axiosInstance.post("/user/cart", {
        itemId: id,
        quantity: 1,
      });

      if (response.status === 200) {
        const count = parseInt(localStorage.getItem("cart"));

        if (count) {
          dispatch(setCart(count + 1));
          localStorage.setItem("cart", count + 1);
        } else {
          dispatch(setCart(1));
          localStorage.setItem("cart", 1);
        }
        toast.success("Product added to cart");

        setTimeout(() => {
          setIsAddingToCart(false);
        }, 2000);
      } else {
        console.error("Error updating profile:", response.statusText);

        setIsAddingToCart(false);
      }
    } catch (error) {
      if (error.response.status === 413) {
        toast.error("Out of stock");
      }

      setIsAddingToCart(false);
    }
  };

  return (
    <div className="h-100 bg-light p-30">
      <h3>{info.name}</h3>
      <div style={{ fontSize: "0.85rem" }}>
        By:{" "}
        {`${info.authorInfo[0].firstName} ${info.authorInfo[0].lastName}`}
      </div>

      {/* Product Rating */}

      <div className="d-flex mb-3">
        <div className="text-primary mr-2">
          {Array.from({ length: 5 }, (_, index) => (
            <small
              key={index}
              className={`text-primary mr-1 ${
                info.rating > index ? "fa fa-star" : "far fa-star"
              }`}
            ></small>
          ))}
        </div>
        <small className="pt-1">
          ({info.num_of_people > 0 ? info.num_of_people : 0} Reviews)
        </small>
        
      </div>

      {/* Product Price */}
      <h3 className="font-weight-semi-bold mb-4">${info.price}</h3>
      <span style={{ fontSize: "1.2rem" ,fontWeight: "bold"}}>
        Category:{" "}
        {`${info.categoryInfo[0].name}`}
      </span>
      <span style={{ fontSize: "1.2rem", marginLeft:"0.5rem" ,fontWeight: "bold"}}>
       | Publisher:{" "}
        {`${info.publisherInfo[0].name}`}
      </span>

      {/* Product Description */}
      <p className="mb-4">{info.description}</p>

      {/* Quantity Selector and Add to Cart Button */}
      <div className="d-flex align-items-center mb-4 pt-2">
        <Button
          onClick={cartProduct}
          payload={<i className="fa fa-shopping-cart mr-1"></i>}
          text={" Add To Cart"}
          className="btn btn-primary px-3"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
