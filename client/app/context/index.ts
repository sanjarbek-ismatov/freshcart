import { createContext, useContext } from "react";
import { UserType } from "@/types";

export const UserContext = createContext({} as UserType | undefined);
export const useUserContext = () => {
  return useContext(UserContext);
};
