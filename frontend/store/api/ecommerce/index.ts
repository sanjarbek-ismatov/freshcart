import { RequestForm, ServerResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const eCommerceApi = createApi({
  reducerPath: "ecommerce",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost/api" }),
  endpoints(build) {
    return {
      signUp: build.mutation<ServerResponse<any>, RequestForm>({
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
    };
  },
});
export const { useSignUpMutation } = eCommerceApi;
