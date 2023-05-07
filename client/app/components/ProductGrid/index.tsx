"use client";
import "./PopularProducts.css";
import ProductCard from "../Product";
import { ProductType, Sort } from "@/types";
import { useEffect, useMemo } from "react";

function PopularProducts({
  title,
  products,
  filter,
}: {
  title: string;
  products: ProductType[];
  filter: Sort;
}) {
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  const sorted = useMemo(() => {
    switch (filter?.sortBy) {
      case "date":
        return products.sort(
          (a, b) =>
            new Date(a.dateOfManufacture).getTime() -
            new Date(b.dateOfManufacture).getTime()
        );
      case "rating":
        return products.sort((a, b) => b.rating - a.rating);
      case "high":
        return products.sort((a, b) => b.price - a.price);
      case "low":
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  }, [filter?.sortBy, products]);
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <div className="my-5 grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-5 grid-rows-2">
          {sorted.map((e, i) => (
            <ProductCard key={i} details={e} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularProducts;
