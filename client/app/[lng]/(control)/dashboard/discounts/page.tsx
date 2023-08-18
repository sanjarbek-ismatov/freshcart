import { Typography } from "@components";
import { getSSRData } from "@/app/utils/getData";
import { ProductType } from "@types";
import * as process from "process";
import { FilterDiscounts } from "@components/dashboard";

export default async function DiscountPage() {
  const products = await getSSRData<ProductType[]>(
    `${process.env.SERVER_URL}/product/all` || "",
  );
  const discounts = new Set<number>();
  products.forEach((product) =>
    product.discounts.forEach((discount) => discounts.add(discount)),
  );
  return (
    <>
      <Typography text="Chegirmalarni nazorat qiling" />
      <FilterDiscounts products={products} discounts={Array.from(discounts)} />
    </>
  );
}
