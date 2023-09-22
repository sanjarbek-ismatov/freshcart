import "./Container.css";
import { ReactNode } from "react";
import { Footer, Menu, NavbarContainer } from "@/app/components";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container max-w-[1300px] mx-auto px-2 xl:px-3 sm:px-5">
      <NavbarContainer />
      <Menu />
      {children}
      <Footer />
      <div className="fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
        <div className="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
        <div className="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
        <div className="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
        <div className="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
      </div>

      <div className="fixed top-0 right-0 mt-6 mr-16 text-red-500 text-xl font-bold">
        →
      </div>
    </div>
  );
}

export default Container;
