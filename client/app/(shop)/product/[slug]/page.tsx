import { getSSRData } from "@/app/utils/getData";
import { ProductType } from "@/types";
import { Slide } from "@/app/components";

async function ProductPage({ params: { slug } }: { params: { slug: string } }) {
  const product = await getSSRData<ProductType>(
    `http://localhost:4000/api/product/${slug}`
  );
  return (
    <>
      <div className="flex">
        <Slide product={product} />
        <div className="w-[600px]"></div>
      </div>
    </>
  );
}

export default ProductPage;
