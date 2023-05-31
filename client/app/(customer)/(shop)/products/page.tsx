import { BreadCrumb } from "@/app/components";
import React from "react";
import { Filter, Products } from "./components";
import { CategoryType, ProductType, VendorType } from "@/types";
import { getSSRData } from "@/app/utils/getData";

const Index = async () => {
  const products = await getSSRData<ProductType[]>(
    "http://localhost:4000/api/product/all"
  );
  const categories = await getSSRData<CategoryType[]>(
    "http://localhost:4000/api/category/all"
  );
  const vendors = await getSSRData<VendorType[]>(
    "http://localhost:4000/api/vendor/all"
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
