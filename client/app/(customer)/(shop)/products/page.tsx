import { BreadCrumb } from "@components";
import React from "react";
import { Filter, Products } from "./components";
import { CategoryType, ProductType, VendorType } from "@types";
import { getSSRData } from "@/app/utils/getData";
import { getServerUrl } from "@/app/utils/getServerUrl";

const Index = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const products = (
    await getSSRData<ProductType[]>(`${getServerUrl()}/product/all`)
  ).filter(
    (e) =>
      (searchParams.name
        ? e.name.toLowerCase().includes(searchParams.name.toLowerCase())
        : true) &&
      (searchParams.category
        ? e.category.name === searchParams.category
        : true),
  );
  const categories = await getSSRData<CategoryType[]>(
    "http://localhost:4000/api/category/all",
  );
  const vendors = await getSSRData<VendorType[]>(
    "http://localhost:4000/api/vendor/all",
  );
  return (
    <>
      <div className="container mx-auto max-w-[1300px]">
        <BreadCrumb
          path={[
            { title: "Uy", path: "/" },
            { title: "Maxsulotlar", path: "/products" },
          ]}
        />
        <div className="flex">
          <Filter vendors={vendors} categories={categories} />
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default Index;
