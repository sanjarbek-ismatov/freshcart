import {Suspense, useCallback} from "react";
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
    const res = await fetch('http://localhost:4000/api/product/all', {cache: 'no-store'})
    const data: ProductType[] = await res.json()
    return data
}
import {ProductType} from "@/types";
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
