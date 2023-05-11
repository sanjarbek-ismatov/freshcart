import { getSSRData } from "@/app/utils/getData";
import { ProductType } from "@/types";

async function ProductPage({ params: { slug } }: { params: { slug: string } }) {
  const product = await getSSRData<ProductType>(
    `http://localhost:4000/api/product/${slug}`
  );
  return <p>{product.name}</p>;
}

export default ProductPage;
