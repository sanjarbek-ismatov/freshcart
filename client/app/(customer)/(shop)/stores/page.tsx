import { Footer } from "@components";
import { Header, StoresGrid } from "./components";
import { getSSRData } from "@/app/utils/getData";
import { VendorType } from "@/types";
import { getServerUrl } from "@/app/utils/getServerUrl";

async function Stores() {
  const vendors = await getSSRData<VendorType[]>(
    `${getServerUrl()}/vendor/all`,
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
