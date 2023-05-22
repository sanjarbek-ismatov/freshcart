"use client";
import { FC, ReactNode } from "react";
import { UserContext } from "@/app/context/index";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data } = useGetUserInfoQuery();
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
