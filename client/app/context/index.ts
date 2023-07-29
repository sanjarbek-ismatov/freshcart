"use client";
import { createContext, useContext } from "react";
import { OrderUsableType, UserType } from "@/types";

export const UserContext = createContext(
  {} as {
    data?: { user: UserType; orders: OrderUsableType[] };
    refetch: any;
    isLoading: boolean;
  },
);

export const UrlContext = createContext("http://localhost:4000/api");
export const useUserContext = () => {
  return useContext(UserContext);
};
export const useUrlContext = () => {
  return useContext(UrlContext);
};
