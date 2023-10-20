import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort:{}
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort.type = action.payload.type;
      state.sort.order = action.payload.order;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
