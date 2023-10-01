"use client";
import "./PopularProducts.css";
import ProductCard from "../Product";
import { ProductType } from "@/types";
import { useMemo } from "react";
import { useAppSelector } from "@/store/store";
import { DefaultToastComponent } from "@/app/components";

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
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
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

  return (
    <>
      <DefaultToastComponent />
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <div className="my-5 flex flex-wrap p-3">
          {sorted
            .filter((e) => state.stars.includes(e.rating) || !e.rating)
            .filter(
              (e) =>
                state.vendors.includes(e.vendor.name) || !state.vendors.length,
            )
            .filter(
              (e) => e.price >= state.price[0] && e.price <= state.price[1],
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
