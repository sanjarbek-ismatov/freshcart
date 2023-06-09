import React, { ReactNode } from "react";
import { Metadata } from "next";
import { BreadCrumb } from "@components";

export const metadata: Metadata = {
  title: "Do'konlar",
};

function StoresLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1300px] container">
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Do'konlar", path: "/stores" },
        ]}
      />
      {children}
    </div>
  );
}

export default StoresLayout;
