import { Metadata } from "next";
import React, { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Maxsulotlar",
  description: "Maxsulotlar sahifasi",
};
const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ProductsLayout;
