import { createAction } from "@reduxjs/toolkit";

const sortBy = createAction<"rating" | "date" | "high" | "low">(
  "filter/sortBy"
);
const countItem = createAction<number>("filter/count");
const stars = createAction<number>("filter/stars");
const vendor = createAction<string>("filter/vendor");
export { countItem, sortBy, stars, vendor };
