import { LinkComponent } from "@/app/(control)/dashboard/auth/components";
import { BreadCrumb } from "@/app/components";
import React from "react";

function AuthPage() {
  return (
    <div>
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Sotuvchi", path: "/vv" },
          { title: "Autentifikatsiya", path: "/vv/auth" },
        ]}
      />
      <LinkComponent />
    </div>
  );
}

export default AuthPage;
