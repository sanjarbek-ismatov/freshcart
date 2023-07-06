import { createSlice } from "@reduxjs/toolkit";
import { CheckoutProduct } from "@types";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: [] as CheckoutProduct[],
  reducers: {
    // select(state, action: PayloadAction<CheckoutProduct>) {
    //   const item = state.findIndex((e) => e.id.slug === action.payload.id.slug);
    //   if (item !== -1) state.splice(item, 1);
    //   else state.push(action.payload);
    // },
    // selectAll(state, action: PayloadAction<CheckoutProduct[]>) {
    //   state.splice(0, state.length);
    //   state.push(...action.payload);
    // },
    // reset(state) {
    //   state.splice(0, state.length);
    // },
    setState(state, action) {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});
export default checkoutSlice;
