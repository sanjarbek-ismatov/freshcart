import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "@types";

export const productSlice = createSlice({
  name: "product",
  initialState: [] as ProductType[],
  reducers: {
    setProductState(state, action) {
      state.splice(0, state.length);
      state.length = 0;
      state.push(...action.payload);
    },
  },
});
