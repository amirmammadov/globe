import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBtnOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFilterBtnOpen: (state, action) => {
      state.filterBtnOpen = action.payload;
    },
  },
});

export const { setFilterBtnOpen } = appSlice.actions;

export default appSlice.reducer;
