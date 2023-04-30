import {Suspense, useCallback, useEffect, useRef, useState} from "react";
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
const getProducts = async () => {
    const res = await fetch('http://localhost:4000/api/product/all')
    const data: Product[] = await res.json()
    return data
}
import {Product} from "@/types";
export  default async function Home() {
    const products = await getProducts()
  return (
    <div className="container max-w-[1300px] mx-auto">
      <Swiper />
      <Categories />

      <ProductGrid products={products} title="Mashhur maxsulotlar" />

      <About />
      <Footer />
      <SidePanel />
    </div>
  );
}
