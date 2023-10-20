import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const publisherSlice = createSlice({
  name: "publisher",
  initialState,
  reducers: {

    addPublisher(state, action) {
      state.items.push(action.payload);
    },

    removePublisher(state, action) {
      state.items = state.items.filter((item) => item !== action.payload);
    },
    
  },
});

export const { addPublisher, removePublisher } = publisherSlice.actions;
export default publisherSlice.reducer;
