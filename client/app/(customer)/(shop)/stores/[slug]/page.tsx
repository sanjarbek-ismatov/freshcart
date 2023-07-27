import { getSSRData } from "@/app/utils/getData";
import { VendorType } from "@/types";
import { Products } from "@/app/(customer)/(shop)/products/components";
import { Header } from "@/app/(customer)/(shop)/stores/components";
import { getServerUrl } from "@/app/utils/getServerUrl";

async function Store({ params }: { params: { slug: string } }) {
  const vendor = await getSSRData<VendorType>(
    `${getServerUrl()}/vendor/${params.slug}`,
  );
  return (
    <>
      <Header title={vendor.name} image={vendor.image} />{" "}
      <Products products={vendor.products} />
    </>
  );
}

export default Store;
