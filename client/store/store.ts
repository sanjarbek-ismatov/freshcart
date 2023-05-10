import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import { eCommerceApi } from "./api/ecommerce";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { filterReducer } from "@/store/reducers/filter";
import {
  countItem,
  price,
  sortBy,
  stars,
  vendor,
} from "@/store/actions/filter";

export const store = configureStore({
  reducer: {
    [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      eCommerceApi.middleware
    );
  },
});
export const {
  sortBy: sortByDispatch,
  countItem: countItemDispatch,
  stars: starsDispatch,
  vendor: vendorDispatch,
  price: priceDispatch,
} = bindActionCreators(
  {
    sortBy,
    countItem,
    stars,
    vendor,
    price,
  },
  store.dispatch
);
const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;
const useAppDispatch = useDispatch<typeof store.dispatch>;
export { useAppSelector, useAppDispatch };
