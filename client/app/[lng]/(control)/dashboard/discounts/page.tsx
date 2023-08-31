import { Typography } from "@components";
import { getSSRData } from "@/app/utils/getData";
import { DiscountType, ProductType } from "@types";
import * as process from "process";
import { FilterDiscounts } from "@components/dashboard";

export default async function DiscountPage() {
  const products = await getSSRData<ProductType[]>(
    `${process.env.SERVER_URL}/product/all` || "",
  );
  const discounts = await getSSRData<DiscountType[]>(
    `${process.env.SERVER_URL}/product/discount/all` || "",
  );
  return (
    <>
      <Typography text="Chegirmalarni nazorat qiling" />
      <FilterDiscounts products={products} discounts={discounts} />
    </>
  );
}
