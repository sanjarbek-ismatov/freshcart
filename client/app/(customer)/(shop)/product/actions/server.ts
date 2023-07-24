import { getSSRData } from "@/app/utils/getData";
import { ProductType } from "@types";

export async function getData(slug: string) {
  return await getSSRData<ProductType>(
    `http://localhost:4000/api/product/${slug}`,
  );
}
