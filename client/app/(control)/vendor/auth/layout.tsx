import { BreadCrumb } from "@/app/components";
import React, { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1300px] container">
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Sotuvchi", path: "/vendor" },
          { title: "Autintifikatsiya", path: "/vendor/auth" },
        ]}
      />
      {children}
    </div>
  );
}

export default AuthLayout;
