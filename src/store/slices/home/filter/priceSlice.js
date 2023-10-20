import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: {},
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price.start = action.payload.min;
       state.price.end = action.payload.max;
    },
   
  },
});

export const { setPrice } = priceSlice.actions;
export default priceSlice.reducer;
