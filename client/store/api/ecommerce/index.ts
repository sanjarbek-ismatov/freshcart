import {
  RequestRegisterForm,
  RequestLoginForm,
  ServerResponse,
  User,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BaseQueryResult} from "@reduxjs/toolkit/src/query/baseQueryTypes";
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
        transformResponse(baseQueryResult: BaseQueryResult<any>, meta, arg){
          return {...baseQueryResult, token: meta?.response?.headers.get('x-token')}
        }
      }),
    };
  },
});
export const { useSignUpMutation, useLoginMutation } = eCommerceApi;
