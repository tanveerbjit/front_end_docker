import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item:10,
};

const itemNumberSlice = createSlice({
  name: "itemNumber",
  initialState,
  reducers: {
    setItemNumbre(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setItemNumbre } = itemNumberSlice.actions;
export default itemNumberSlice.reducer;
