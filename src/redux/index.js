import { createSlice } from "@reduxjs/toolkit";

const shopingSlice = createSlice({
  name: "addTOShopingCar",
  initialState: {
    CarData: [],
  },
  reducers: {
    add: (state, action) => {
      state.CarData.push(action.payload);
    },
    remove: (state, action) => {
      state.CarData = action.payload;
    },
    update: (state, action) => {
      state.CarData = action.payload;
    },
  },
});

export default shopingSlice.reducer;
export const { add, remove, update } = shopingSlice.actions;
