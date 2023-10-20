import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    addAuthor(state, action) {
      state.items.push(action.payload);
    },

    removeAuthor(state, action) {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addAuthor, removeAuthor } = authorSlice.actions;
export default authorSlice.reducer;
