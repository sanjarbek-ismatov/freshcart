import {
  RequestRegisterForm,
  RequestLoginForm,
  ServerResponse,
  User,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const eCommerceApi = createApi({
  reducerPath: "ecommerce",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/api",
  }),
  endpoints(build) {
    return {
      signUp: build.mutation<ServerResponse<any>, RequestRegisterForm>({
        query(body) {
          return {
            url: "signup",
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
            url: "login",
            method: "POST",
            body,
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
    };
  },
});
export const { useSignUpMutation, useLoginMutation } = eCommerceApi;
