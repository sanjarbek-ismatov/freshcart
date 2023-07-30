import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import { eCommerceApi } from "./api/ecommerce";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  clientFilterReducer,
  controlFilterReducer,
} from "@/store/reducers/filter";
import { clientFilter, controlFilter } from "@/store/actions/filter";
import checkoutSlice from "@/store/reducers/checkout";
import orderFilterSlice from "@/store/reducers/order";
import { productSlice } from "@/store/reducers/product";

export const store = configureStore({
  reducer: {
    [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    filter: clientFilterReducer,
    controlFilter: controlFilterReducer,
    checkoutFilter: checkoutSlice.reducer,
    productFilter: productSlice.reducer,
    controlOrderFilter: orderFilterSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      eCommerceApi.middleware,
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
  store.dispatch,
);
export const { setCheckoutState } = bindActionCreators(
  checkoutSlice.actions,
  store.dispatch,
);
export const { setOrderState } = bindActionCreators(
  orderFilterSlice.actions,
  store.dispatch,
);
export const { setProductState } = bindActionCreators(
  productSlice.actions,
  store.dispatch,
);
export type RootDispatch = typeof store.dispatch;
const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;
const useAppDispatch = useDispatch<typeof store.dispatch>;
export { useAppSelector, useAppDispatch };
