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
import { getServerUrl } from "@/app/utils/getServerUrl";

export default async function Home() {
  const products = await getSSRData<ProductType[]>(
    `${getServerUrl()}/product/all`,
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
