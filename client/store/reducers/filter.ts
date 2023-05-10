import { createReducer } from "@reduxjs/toolkit";
import { countItem, sortBy, stars } from "@/store/actions/filter";

const initialState = {
  count: 10,
  sortBy: "rating",
  stars: [1, 2, 3, 4, 5],
};
const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(sortBy, (state, action) => {
    state.sortBy = action.payload;
  });
  builder.addCase(countItem, (state, action) => {
    state.count = action.payload;
  });
  builder.addCase(stars, (state, action) => {
    state.stars.includes(action.payload)
      ? state.stars.splice(state.stars.indexOf(action.payload), 1)
      : state.stars.push(action.payload);
  });
});
export { filterReducer };
