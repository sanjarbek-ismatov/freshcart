import { createContext, useContext } from "react";
import { OrderUsableType, UserType } from "@/types";

export const UserContext = createContext(
  {} as { data?: { user: UserType; orders: OrderUsableType[] }; refetch: any },
);
export const useUserContext = () => {
  return useContext(UserContext);
};
