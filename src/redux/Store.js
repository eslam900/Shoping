import { configureStore } from "@reduxjs/toolkit";
import shopingSlice from "./index";

const store = configureStore({
  reducer: { addTo: shopingSlice },
});

export default store;
