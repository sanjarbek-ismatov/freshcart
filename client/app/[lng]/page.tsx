import { About, Categories, ProductGrid, Swiper } from "./components";
import React from "react";
import { Container } from "@components";
import { ProductType } from "@types";
import { getSSRData } from "@/app/utils/getData";
import { getTranslation } from "@internalization";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const products = await getSSRData<ProductType[]>(
    `${process.env.SERVER_URL}/product/all`,
  );
  const t = getTranslation(lng);
  return (
    <Container>
      <Swiper />
      <Categories />
      <ProductGrid products={products} title={t["popular-products"]} />
      <About />
    </Container>
  );
}
