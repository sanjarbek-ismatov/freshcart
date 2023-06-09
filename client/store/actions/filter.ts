import { createAction } from "@reduxjs/toolkit";

const clientFilter = {
  countItemFilter: createAction<number>("filter/count"),
  starsFilter: createAction<number>("filter/stars"),
  sortByFilter: createAction<"rating" | "date" | "high" | "low">(
    "filter/sortBy"
  ),
  vendorFilter: createAction<string>("filter/vv"),
  priceFilter: createAction<[number, number]>("filter/price"),
};
const controlFilter = {
  statusFilter: createAction<string>("controlFilter/status"),
};
export { clientFilter, controlFilter };
