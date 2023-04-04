import { configureStore } from "@reduxjs/toolkit";
import { eCommerceApi } from "./api/ecommerce";
export const store = configureStore({
  reducer: {
    [eCommerceApi.reducerPath]: eCommerceApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      eCommerceApi.middleware
    );
  },
});
