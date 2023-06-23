import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@types";

interface CheckoutProduct {
  id: ProductType;
  count: number;
}

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: [] as CheckoutProduct[],
  reducers: {
    select(state, action: PayloadAction<CheckoutProduct>) {
      const item = state.findIndex((e) => e.id.slug === e.id.slug);
      if (item !== -1) state.splice(item, 1);
      else state.push(action.payload);
    },
    selectAll(state, action: PayloadAction<CheckoutProduct[]>) {
      state.push(...action.payload);
    },
    reset(state) {
      state.splice(0, state.length);
    },
  },
});
export default checkoutSlice;
