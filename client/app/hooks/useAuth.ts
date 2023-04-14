import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState<string | null>(null);
  useEffect(() => {
    setAuth(localStorage.getItem("token"));
  }, []);
  return auth;
};
export { useAuth };
