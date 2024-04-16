import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { changeMode } = appSlice.actions;

export default appSlice.reducer;
