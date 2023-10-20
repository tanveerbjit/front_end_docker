import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  cart:0,
};

const fixCart = () => {
  const cart = localStorage.getItem("cart")
  if(cart){
    initialState.cart = cart;
  }
};

fixCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart =  action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
