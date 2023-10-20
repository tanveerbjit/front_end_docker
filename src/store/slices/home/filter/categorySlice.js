import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {

    addCategory(state, action) {
    
        state.items.push(action.payload);
        
    },

    removeCategory(state, action) {

      state.items = state.items.filter((item) => item !== action.payload);
    }

  },
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
