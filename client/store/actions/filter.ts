import { createAction } from "@reduxjs/toolkit";

const sortBy = createAction<"rating" | "date" | "high" | "low">(
  "filter/sortBy"
);
const countItem = createAction<number>("filter/count");
const stars = createAction<number>("filter/stars");
export { countItem, sortBy, stars };
