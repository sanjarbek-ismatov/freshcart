"use client";
import "./PopularProducts.css";
import ProductCard from "../Product";
import { ProductType } from "@/types";
import { useMemo } from "react";
import { useAppSelector } from "@/store/store";

function PopularProducts({
  title,
  products,
}: {
  title: string;
  products: ProductType[];
}) {
  const state = useAppSelector((state) => state.filter);
  const sorted = useMemo(() => {
    const mutation = [...products];
    switch (state?.sortBy) {
      case "date":
        return mutation.sort(
          (a, b) =>
            new Date(a.dateOfManufacture).getTime() -
            new Date(b.dateOfManufacture).getTime()
        );
      case "rating":
        return mutation.sort((a, b) => b.rating - a.rating);
      case "high":
        return mutation.sort((a, b) => b.price - a.price);
      case "low":
        return mutation.sort((a, b) => a.price - b.price);
      default:
        return mutation;
    }
  }, [products, state]);
  console.log(products);
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <div className="my-5 grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-5 grid-rows-2">
          {sorted
            .filter((e) => state.stars.includes(e.rating))
            .filter(
              (e) =>
                state.vendors.includes(e.vendor.name) || !state.vendors.length
            )
            .map((e, i) => (
              <ProductCard key={i} details={e} />
            ))}
        </div>
      </div>
    </>
  );
}

export default PopularProducts;
