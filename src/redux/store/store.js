import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../slices/menuSlices";

const store = configureStore({
  reducer: {
    menuItem: menuReducer,
  },
});
export default store;
