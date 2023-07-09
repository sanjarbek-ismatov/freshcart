import { createSlice } from "@reduxjs/toolkit";
import { OrderType, ProductType, VendorType } from "@types";

const orderFilterSlice = createSlice({
  name: "orderFilter",
  initialState: [] as OrderType<ProductType, VendorType>[],
  reducers: {
    setOrderState(state, action) {
      state.splice(0, state.length);
      state.length = 0;
      state.push(...action.payload);
    },
  },
});
export default orderFilterSlice;
