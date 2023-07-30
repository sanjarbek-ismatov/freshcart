import { Footer } from "@components";
import { Header, StoresGrid } from "./components";
import { getSSRData } from "@/app/utils/getData";
import { VendorType } from "@/types";

async function Stores() {
  const vendors = await getSSRData<VendorType[]>(
    `${process.env.SERVER_URL}/vendor/all`,
  );

  return (
    <>
      <Header />
      <StoresGrid url={process.env.SERVER_URL} vendors={vendors} />
      <Footer />
    </>
  );
}

export default Stores;
