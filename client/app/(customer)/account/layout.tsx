import { Container } from "@components";
import { ReactNode } from "react";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
