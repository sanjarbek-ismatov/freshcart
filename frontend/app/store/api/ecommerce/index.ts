import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const eCommerceApi = createApi({
  reducerPath: "ecommerce",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL || "" }),
  endpoints(build) {
    return {
      signUp: build.mutation({
        query(body) {
          return {
            url: "signup",
            method: "POST",
            body,
          };
        },
      }),
    };
  },
}) as any;
const { useSignUpMutation } = eCommerceApi;
