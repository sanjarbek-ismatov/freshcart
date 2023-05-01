import { Metadata } from "next";
import React, { ReactNode } from "react";
import { BreadCrumb } from "@/app/components";

export const metadata: Metadata = {
  title: "Maxsulotlar",
  description: "Maxsulotlar sahifasi",
};
const ProductsLayout = ({ children }: { children: ReactNode }) => {
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
};

export default ProductsLayout;
