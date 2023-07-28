import { BreadCrumb } from "@components";
import React from "react";
import { Filter, Products } from "./components";
import { CategoryType, ProductType, VendorType } from "@types";
import { getSSRData } from "@/app/utils/getData";
import * as process from "process";

const Index = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const products = (
    await getSSRData<ProductType[]>(`${process.env.SERVER_URL}/product/all`)
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
    `${process.env.SERVER_URL}/category/all`,
  );
  const vendors = await getSSRData<VendorType[]>(
    `${process.env.SERVER_URL}/vendor/all`,
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
