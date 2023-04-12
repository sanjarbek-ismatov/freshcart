"use client";
import products from "data/products.json";
import "./PopularProducts.css";
import ProductCard from "../Product";
function PopularProducts() {
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-900">Popular Products</h1>
        <div className="my-5 grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-5 grid-rows-2">
          {products.map((e, i) => (
            <ProductCard key={i} details={e} />
          ))}
        </div>
      </div>
    </>
  );
}
export default PopularProducts;
