import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pic: "",
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setPic(state, action) {
      state.pic = action.payload;
    },
  },
});

export const { setPic } = userProfileSlice.actions;
export default userProfileSlice.reducer;
