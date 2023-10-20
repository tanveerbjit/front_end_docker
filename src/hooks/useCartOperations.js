// useCart.js
import { useState, useEffect } from 'react';
import axiosInstance from '../util/axiosInstance'; // Import your axios instance
import { useDispatch } from 'react-redux';
import { setCart } from '../store/slices/cart/cartSlice';
import {setMessage} from '../store/slices/message/messageSlice';
import { toast } from "react-toastify";




export function useCart() {
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const callCartApi = async () => {
    try {

      const response = await axiosInstance.get('/user/get-cart', {
        withCredentials: true, // Include cookies in the request
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        const totalQuantity = data.data.orderItems.reduce(
          (accumulator, currentValue) => {
            return accumulator + currentValue.quantity;
          },
          0
        );
        
        dispatch(setCart(totalQuantity));

        localStorage.setItem("cart", totalQuantity);
        setOrder(data.data);
        setIsLoading(true);

      } else {

        dispatch(setCart(0));
         localStorage.setItem("cart", 0);
         setIsLoading(true);
         
        // Handle error if needed
      }
    } catch (err) {
      console.log(err)
      dispatch(setCart(0));
      setIsLoading(true);
      localStorage.setItem("cart", 0);
     
      console.error(err);
      // Handle error if needed
    }
  };

  const cartOperation = async (id, operation) => {
    try {
      let data = {
        itemId: id,
        quantity: 1,
      };

      let url = '';
      let msg = "";
      const cartData = localStorage.getItem("cart");
      if (operation === 'add') {

       
        url = '/user/cart';
        msg="product added"
      } else if (operation === 'remove') {
        msg = "product removed";
        url = '/user/cart-remove';
      } else if (operation === 'remove-all') {
        msg = "product remove";
        url = '/user/cart/product/destroy';
      }

      const headers = {
        'Content-Type': 'application/json',
      };

      const options = {
        method: operation === 'add' ? 'POST' : operation === 'remove' ? 'PATCH' : 'DELETE',
        headers: headers,
        withCredentials: true, // Include cookies in the request
        data: JSON.stringify(data),
      };

      const response = await axiosInstance(url, options);

      if (response.status !== 200) {
        console.log("status code ", response.status);
        if (response.status === 413) {  toast.error("out of stock");}
        return;
      }

      const responseData = response.data;
      if (operation === "add") {
       toast.success("product added");
      } else if (operation === "remove") {
        toast.warning("product remove");
      } else if (operation === "remove-all") {
        toast.warning("product remove");
      }
     
      
      
    
      callCartApi();
      setIsLoading(false);
      return response;
    } catch (err) {
       if (err.response.status === 413) {
         toast.error("Out of stock");
       }
      console.log(err)
  
      // Handle errors if needed
    }
  };

  useEffect(() => {
    callCartApi();
  }, []);

  return { order, isLoading, cartOperation };
}
