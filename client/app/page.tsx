import {
  About,
  Categories,
  Footer,
  Menu,
  Navbar,
  ProductGrid,
  SidePanel,
  Swiper,
} from "./components";
import { ProductType } from "@/types";
import { getSSRData } from "@/app/utils/getData";
import React from "react";

export default async function Home() {
  const products = await getSSRData<ProductType[]>(
    "http://localhost:4000/api/product/all"
  );
  return (
    <div className="container max-w-[1300px] mx-auto">
      <Navbar />
      <Menu />
      <Swiper />
      <Categories />

      <ProductGrid products={products} title="Mashhur maxsulotlar" />

      <About />
      <Footer />
      <SidePanel />
    </div>
  );
}
