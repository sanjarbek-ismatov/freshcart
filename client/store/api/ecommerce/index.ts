import {
  RequestLoginForm,
  RequestRegisterForm,
  ServerResponse,
  User,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryResult } from "@reduxjs/toolkit/src/query/baseQueryTypes";
import { gettoken } from "@/app/utils/gettoken";

export const eCommerceApi = createApi({
  reducerPath: "ecommerce",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  endpoints(build) {
    return {
      signUp: build.mutation<ServerResponse<any>, RequestRegisterForm>({
        query(body) {
          return {
            url: "auth/signup",
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
      login: build.mutation<ServerResponse<User[]>, RequestLoginForm>({
        query(body) {
          return {
            url: "auth/login",
            method: "POST",
            body,
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
        transformResponse(baseQueryResult: BaseQueryResult<any>, meta, arg) {
          return {
            ...baseQueryResult,
            token: meta?.response?.headers.get("x-token"),
          };
        },
      }),
      vendorRegister: build.mutation<ServerResponse<any>, any>({
        query: (body) => ({
          url: "/vendor/register",
          method: "POST",
          body,
        }),
      }),
      vendorLogin: build.mutation<ServerResponse<any>, RequestLoginForm>({
        query: (body) => ({ url: "/vendor/login", method: "POST", body }),
        transformResponse(baseQueryResult: BaseQueryResult<any>, meta, args) {
          return {
            ...baseQueryResult,
            token: meta?.response?.headers.get("x-vendor-token"),
          };
        },
      }),
      addProduct: build.mutation<ServerResponse<any>, {}>({
        query: (body) => ({
          url: "/product/create",
          method: "POST",
          body,
          headers: {
            "x-vendor-token": gettoken("x-vendor-token"),
          },
        }),
      }),
    };
  },
});
export const {
  useSignUpMutation,
  useLoginMutation,
  useVendorLoginMutation,
  useVendorRegisterMutation,
  useAddProductMutation,
} = eCommerceApi;
