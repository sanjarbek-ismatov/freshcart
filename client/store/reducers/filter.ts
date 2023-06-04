import { createReducer } from "@reduxjs/toolkit";
import { clientFilter, controlFilter } from "@/store/actions/filter";

const initialStateClientFilter = {
  count: 10,
  sortBy: "rating",
  stars: [1, 2, 3, 4, 5],
  vendors: [] as string[],
  price: [0, 999999] as [number, number],
};
const initialStateControlFilter = {
  status: "",
};
const clientFilterReducer = createReducer(
  initialStateClientFilter,
  (builder) => {
    builder.addCase(clientFilter.sortByFilter, (state, action) => {
      state.sortBy = action.payload;
    });
    builder.addCase(clientFilter.countItemFilter, (state, action) => {
      state.count = action.payload;
    });
    builder.addCase(clientFilter.starsFilter, (state, action) => {
      state.stars.includes(action.payload)
        ? state.stars.splice(state.stars.indexOf(action.payload), 1)
        : state.stars.push(action.payload);
    });
    builder.addCase(clientFilter.vendorFilter, (state, action) => {
      state.vendors.includes(action.payload)
        ? state.vendors.splice(state.vendors.indexOf(action.payload), 1)
        : state.vendors.push(action.payload);
    });
    builder.addCase(clientFilter.priceFilter, (state, action) => {
      state.price = action.payload;
    });
  }
);
const controlFilterReducer = createReducer(
  initialStateControlFilter,
  (builder) => {
    builder.addCase(controlFilter.statusFilter, (state, action) => {
      state.status = action.payload;
    });
  }
);
export { clientFilterReducer, controlFilterReducer };
