import { createSlice } from "@reduxjs/toolkit";
import { OrderUsableType } from "@types";

const orderFilterSlice = createSlice({
  name: "orderFilter",
  initialState: [] as OrderUsableType[],
  reducers: {
    setOrderState(state, action) {
      state.splice(0, state.length);
      state.length = 0;
      state.push(...action.payload);
    },
  },
});
export default orderFilterSlice;
