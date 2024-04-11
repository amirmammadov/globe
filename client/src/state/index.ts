import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/appSlice";

const store = configureStore({
  reducer: appSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
