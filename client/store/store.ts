import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import { eCommerceApi } from "./api/ecommerce";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  clientFilterReducer,
  controlFilterReducer,
} from "@/store/reducers/filter";
import { clientFilter, controlFilter } from "@/store/actions/filter";
import checkoutSlice from "@/store/reducers/checkout";

export const store = configureStore({
  reducer: {
    [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    filter: clientFilterReducer,
    controlFilter: controlFilterReducer,
    checkout: checkoutSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      eCommerceApi.middleware
    );
  },
});
export const {
  sortByFilter: sortByDispatch,
  countItemFilter: countItemDispatch,
  starsFilter: starsDispatch,
  vendorFilter: vendorDispatch,
  priceFilter: priceDispatch,
} = bindActionCreators(clientFilter, store.dispatch);
export const { statusFilter: statusFilterDispatch } = bindActionCreators(
  controlFilter,
  store.dispatch
);
export const { select, selectAll, reset } = bindActionCreators(
  checkoutSlice.actions,
  store.dispatch
);
const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;
const useAppDispatch = useDispatch<typeof store.dispatch>;
export { useAppSelector, useAppDispatch };
