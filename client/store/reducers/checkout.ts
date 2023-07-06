import { createSlice } from "@reduxjs/toolkit";
import { CheckoutProduct } from "@types";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: [] as CheckoutProduct[],
  reducers: {
    setState(state, action) {
      state.splice(0, state.length);
      state.length = 0;
      state.push(...action.payload);
    },
  },
});
export default checkoutSlice;
