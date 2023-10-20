import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseurl from "../../util/baseurl";
import Button from "../common/Button ";



const CartItem = ({ order, cartOperation }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [disableTimeout, setDisableTimeout] = useState(null);
 

  const pic =
    baseurl +
    (order.productDetails.pic && order.productDetails.pic.includes("public/")
      ? order.productDetails.pic.replace("public/", "")
      : order.productDetails.pic);
  console.log(pic);

  const clearDisableTimeout = () => {
    if (disableTimeout) {
      clearTimeout(disableTimeout);
    }
  };

  const cartHandler = (id, operation) => {
    if (isSubmitting) {
      // Prevent multiple clicks while submitting
      return;
    }

    clearDisableTimeout();
    const cart = cartOperation(id, operation);
    
   
    setIsSubmitting(true);

    const newTimeout = setTimeout(() => {
      setIsSubmitting(false);
    }, 2500);

    setDisableTimeout(newTimeout);
  };
  

  useEffect(() => {
    // Clear the isSubmitting state when the component unmounts
   
    return clearDisableTimeout;
  }, []);

  return (
    <tr>
      <td style={{ display: "flex", justifyContent: "start" }}>
        <img src={pic} alt="" style={{ width: "50px" }} />{" "}
        {order.productDetails.name}
      </td>
      <td className="align-middle">${order.productDetails.price}</td>
      <td className="align-middle">
        <div
          className="input-group quantity mx-auto"
          style={{ width: "100px" }}
        >
          <div className="input-group-btn">
            <Button
              onClick={() => cartHandler(order.productDetails._id, "remove")}
              payload={<i className="fa fa-minus"></i>}
              className="btn btn-sm btn-primary btn-minus"
            />
          </div>
         
          
          <span className="form-control form-control-sm bg-secondary border-0">
            {order.quantity}
          </span>
          <div className="input-group-btn">
            <Button
              onClick={() => cartHandler(order.productDetails._id, "add")}
              payload={<i className="fa fa-plus"></i>}
              className="btn btn-sm btn-primary btn-plus"
              disabled={isSubmitting}
            />
          </div>
        </div>
      </td>
      <td className="align-middle">
        ${order.quantity * order.productDetails.price}
      </td>
      <td className="align-middle">
        <Button
          onClick={() => cartHandler(order.productDetails._id, "remove-all")}
          payload={<i className="fa fa-times"></i>}
          className="btn btn-sm btn-danger"
          disabled={isSubmitting}
        />
      </td>
    </tr>
  );
};

export default CartItem;
