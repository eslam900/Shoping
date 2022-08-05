import { configureStore } from "@reduxjs/toolkit";
import shopingSlice from "./index";

const store = configureStore({
  reducer: { Add_To_Car: shopingSlice },
});

export default store;
