import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {

    addRating(state, action) {
      state.items.push(action.payload);
    },

    removeRating(state, action) {
      state.items = state.items.filter((item) => item !== action.payload);
    },

  },
});

export const { addRating, removeRating } = ratingSlice.actions;
export default ratingSlice.reducer;
