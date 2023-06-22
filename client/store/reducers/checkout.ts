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
      if (state.includes(action.payload))
        state.splice(state.indexOf(action.payload), 1);
      else state.push(action.payload);
    },
  },
});
export default checkoutSlice;
