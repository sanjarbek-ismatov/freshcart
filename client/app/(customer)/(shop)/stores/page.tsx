import { Footer } from "@/app/components";
import { Header, StoresGrid } from "./components";
import { getSSRData } from "@/app/utils/getData";
import { VendorType } from "@/types";

async function Stores() {
  const vendors = await getSSRData<VendorType[]>(
    "http://localhost:4000/api/vendor/all"
  );

  return (
    <>
      <Header />
      <StoresGrid vendors={vendors} />
      <Footer />
    </>
  );
}

export default Stores;
