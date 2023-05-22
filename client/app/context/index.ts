import { createContext, useContext } from "react";
import { User } from "@/types";

export const UserContext = createContext({} as User | undefined);
export const useUserContext = () => {
  return useContext(UserContext);
};
