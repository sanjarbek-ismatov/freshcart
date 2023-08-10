import "./Container.css";
import { ReactNode } from "react";
import { Footer, Menu, NavbarContainer } from "@/app/components";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container max-w-[1300px] mx-auto xl:p-0 sm:px-5">
      <NavbarContainer />
      <Menu />
      {children}
      <Footer />
    </div>
  );
}

export default Container;
