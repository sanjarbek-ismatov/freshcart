import { ReactNode } from "react";
import { Container } from "@components";

function ProductsLayout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

export default ProductsLayout;
