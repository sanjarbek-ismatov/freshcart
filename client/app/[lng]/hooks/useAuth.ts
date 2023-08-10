import { useEffect, useState } from "react";

const useAuth = (type = "user") => {
  const [auth, setAuth] = useState<string | null>(null);
  useEffect(() => {
    setAuth(
      localStorage.getItem(type === "vendor" ? "x-vendor-token" : "x-token")
    );
  }, [type]);
  return auth;
};

export { useAuth };
