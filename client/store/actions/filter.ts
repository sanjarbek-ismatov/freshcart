import { createAction } from "@reduxjs/toolkit";

const sortBy = createAction<"rating" | "date" | "high" | "low">(
  "filter/sortBy"
);
const countItem = createAction<number>("filter/count");
const stars = createAction<number>("filter/stars");
const vendor = createAction<string>("filter/vendor");
const price = createAction<[number, number]>("filter/price");
export { countItem, sortBy, stars, vendor, price };
