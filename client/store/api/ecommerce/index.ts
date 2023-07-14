import {
  OrderChangeStatus,
  OrderType,
  OrderUsableType,
  RequestLoginForm,
  RequestRegisterForm,
  ServerResponse,
  UserType,
  VendorWithOrders,
} from "@types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
      login: build.mutation<ServerResponse<UserType[]>, RequestLoginForm>({
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
        transformResponse(baseQueryResult: any, meta, arg) {
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
        transformResponse(baseQueryResult: any, meta, args) {
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
      addToCart: build.mutation<ServerResponse<any>, any>({
        query: (body) => ({
          method: "PUT",
          url: "/auth/product/add",
          body,
          headers: {
            ["x-token"]: gettoken("x-token"),
          },
        }),
      }),
      getUserInfo: build.query<
        { user: UserType; orders: OrderUsableType[] },
        void
      >({
        query: () => ({
          method: "GET",
          url: "/auth/info",
          headers: {
            ["x-token"]: gettoken("x-token"),
          },
        }),
      }),
      updateUserInfo: build.mutation<UserType, UserType | FormData>({
        query: (body) => ({
          url: "/auth/info/update",
          method: "PUT",
          body,
          headers: {
            ["x-token"]: gettoken("x-token"),
          },
        }),
      }),
      getControllerInfo: build.query<VendorWithOrders, void>({
        query: () => ({
          url: "/vendor/me",
          method: "GET",
          headers: {
            ["x-vendor-token"]: gettoken("x-vendor-token"),
          },
        }),
      }),
      deleteProductsById: build.mutation<
        ServerResponse<any>,
        { id: string | string[] }
      >({
        query: (body) => ({
          url: "/product/delete",
          method: "DELETE",
          body,
          headers: {
            ["x-vendor-token"]: gettoken("x-vendor-token"),
          },
        }),
      }),
      addOrder: build.mutation<
        ServerResponse<any>,
        Omit<OrderType<string, string>, "slug" | "clientId" | "date">
      >({
        query: (body) => ({
          method: "POST",
          url: "/order/add",
          body,
          headers: {
            ["x-token"]: gettoken("x-token"),
          },
        }),
      }),
      changeStatus: build.mutation<ServerResponse<any>, OrderChangeStatus>({
        query: ({ productId, status }) => ({
          url: "/order/change",
          method: "PUT",
          body: {
            productId,
            status,
          },
          headers: {
            ["x-vendor-token"]: gettoken("x-vendor-token"),
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
  useAddToCartMutation,
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useGetControllerInfoQuery,
  useDeleteProductsByIdMutation,
  useAddOrderMutation,
  useChangeStatusMutation,
} = eCommerceApi;
