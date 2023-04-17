"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Swiper,
  Categories,
  ProductGrid,
  About,
  Footer,
  Modal,
  SidePanel,
  ModalFormRegister,
  ModalFormLogin,
} from "./components";
import { useAuth } from "./hooks/useAuth";
export default function Home() {
  return (
    <div className="container max-w-[1300px] mx-auto">
      <Swiper />
      <Categories />
      <ProductGrid title="Mashhur maxsulotlar" />
      <About />
      <Footer />
      <SidePanel />
    </div>
  );
}
