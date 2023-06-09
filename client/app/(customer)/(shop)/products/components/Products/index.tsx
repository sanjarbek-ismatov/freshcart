import FilterTop from "../FilterTop";
import Panigation from "../Panigation";
import "./Products.css";
import { ProductGrid } from "@components";
import { ProductType } from "@types";

function Products({ products }: { products: ProductType[] }) {
  return (
    <div className="w-full">
      <FilterTop length={products.length} />
      <ProductGrid title="Dynamic" products={products} />
      <Panigation />
    </div>
  );
}

export default Products;
