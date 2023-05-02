import { LinkComponent } from "@/app/(control)/vendor/auth/components";
import { BreadCrumb } from "@/app/components";
import React from "react";

function AuthPage() {
  return (
    <div>
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Sotuvchi", path: "/vendor" },
          { title: "Autentifikatsiya", path: "/vendor/auth" },
        ]}
      />
      <LinkComponent />
    </div>
  );
}

export default AuthPage;
