"use client";
import FilterTop from "../FilterTop";
import Panigation from "../Panigation";
import "./Products.css";
import { ProductGrid } from "@/app/components";
import { ProductType, Sort } from "@/types";
import { useState } from "react";

function Products({ products }: { products: ProductType[] }) {
  const [filter, setFilter] = useState<Sort>({ count: 10, sortBy: "date" });
  return (
    <div className="w-full">
      <FilterTop filter={filter} setFilter={setFilter} />
      <ProductGrid title="Dynamic" products={products} />
      <Panigation />
    </div>
  );
}

export default Products;
