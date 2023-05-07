import { BreadCrumb } from "@/app/components";
import React from "react";
import { Filter, Products } from "./components";
import { CategoryType, ProductType } from "@/types";

const getProducts = async () => {
  const res = await fetch("http://localhost:4000/api/product/all", {
    cache: "no-store",
  });
  const data: ProductType[] = await res.json();
  return data;
};
const getCategories = async () => {
  const res = await fetch("http://localhost:4000/api/category/all", {
    cache: "no-store",
  });
  const data: CategoryType[] = await res.json();
  return data;
};
const Index = async () => {
  const products = await getProducts();
  const categories = await getCategories();
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
          <Filter categories={categories} />
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default Index;
