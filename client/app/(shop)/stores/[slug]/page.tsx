import { getSSRData } from "@/app/utils/getData";
import { VendorType } from "@/types";
import { Products } from "@/app/(shop)/products/components";
import { Header } from "@/app/(shop)/stores/components";

async function Store({ params }: { params: { slug: string } }) {
  const vendor = await getSSRData<VendorType>(
    `http://localhost:4000/api/vendor/${params.slug}`
  );
  return (
    <>
      <Header title={vendor.name} image={vendor.image} />{" "}
      <Products products={vendor.products} />
    </>
  );
}

export default Store;
