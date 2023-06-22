import {
  About,
  Categories,
  Footer,
  ProductGrid,
  SidePanel,
  Swiper,
} from "./components";
import { ProductType } from "@/types";
import { getSSRData } from "@/app/utils/getData";
import React from "react";
import { Container } from "@components";

export default async function Home() {
  const products = await getSSRData<ProductType[]>(
    "http://localhost:4000/api/product/all"
  );
  return (
    <Container>
      <Swiper />
      <Categories />

      <ProductGrid products={products} title="Mashhur maxsulotlar" />

      <About />
      <Footer />
      <SidePanel />
    </Container>
  );
}
