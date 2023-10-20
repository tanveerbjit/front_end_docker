import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "",
};

const paginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
