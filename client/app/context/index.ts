import { createContext, useContext } from "react";
import { UserType } from "@/types";

export const UserContext = createContext(
  {} as { data?: UserType; refetch: any },
);
export const useUserContext = () => {
  return useContext(UserContext);
};
