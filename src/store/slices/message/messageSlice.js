import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  success:false
};



const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.success =  action.payload
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
