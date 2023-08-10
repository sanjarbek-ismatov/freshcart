"use client";
import { FC, ReactNode } from "react";
import { UrlContext, UserContext } from "@/app/context/index";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, refetch, isLoading } = useGetUserInfoQuery();
  return (
    <UserContext.Provider value={{ data, refetch, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
export const URLProvider: FC<{ children: ReactNode; url: string }> = ({
  children,
  url,
}) => {
  return <UrlContext.Provider value={url}>{children}</UrlContext.Provider>;
};
