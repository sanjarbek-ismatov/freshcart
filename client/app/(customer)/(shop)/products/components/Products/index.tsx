"use client";
import FilterTop from "../FilterTop";
import Panigation from "../Panigation";
import "./Products.css";
import { ProductGrid } from "@components";
import { ProductType } from "@types";
import { useSearchParams } from "next/navigation";

function Products({ products }: { products: ProductType[] }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 0;
  const pageLength = Math.ceil(products.length / 10);
  return (
    <div className="w-full">
      <FilterTop length={products.length} />
      <ProductGrid title="Topilgan maxsulotlar" products={products} />
      <div className="w-full flex justify-center">
        <Panigation
          length={pageLength}
          baseURL="/products"
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default Products;
