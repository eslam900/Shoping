import { createSlice } from "@reduxjs/toolkit";

const shopingSlice = createSlice({
  name: "addTOShopingCar",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = action.payload;
    },
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default shopingSlice.reducer;
export const { add, remove, update } = shopingSlice.actions;
