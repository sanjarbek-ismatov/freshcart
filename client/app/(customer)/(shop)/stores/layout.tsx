import React, { ReactNode } from "react";
import { Metadata } from "next";
import { BreadCrumb, Container } from "@components";

export const metadata: Metadata = {
  title: "Do'konlar",
};

function StoresLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Do'konlar", path: "/stores" },
        ]}
      />
      {children}
    </Container>
  );
}

export default StoresLayout;
