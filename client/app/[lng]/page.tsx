import {
  About,
  Categories,
  ProductGrid,
  SidePanel,
  Swiper,
} from "./components";
import React from "react";
import { Container, NavbarTitle } from "@components";
import { ProductType } from "@types";
import { getSSRData } from "@/app/utils/getData";

export default async function Home() {
  const products = await getSSRData<ProductType[]>(
    `${process.env.SERVER_URL}/product/all`,
  );
  return (
    <>
      <NavbarTitle />
      <Container>
        <Swiper />
        <Categories />

        <ProductGrid products={products} title="Mashhur maxsulotlar" />

        <About />
        <SidePanel />
      </Container>
    </>
  );
}
