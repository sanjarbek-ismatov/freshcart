import { getSSRData } from "@/app/utils/getData";
import { ProductType } from "@/types";
import { BreadCrumb, Slide } from "@components";
import { About, Reviews } from "@/app/(customer)/(shop)/product/components";

async function ProductPage({ params: { slug } }: { params: { slug: string } }) {
  const product = await getSSRData<ProductType>(
    `http://localhost:4000/api/product/${slug}`,
  );
  return (
    <>
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Maxsulotlar", path: "/products" },
          { title: product.name, path: `/${product.slug}` },
        ]}
      />
      <div className="flex">
        <Slide product={product} />
        <About product={product} />
      </div>
      <Reviews reviews={product.reviews} />
    </>
  );
}

export default ProductPage;
