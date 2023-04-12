import FilterTop from "../FilterTop";
import "./Products.css";
import { ProductGrid } from "@/app/components";
function Products() {
  return (
    <div className="w-full">
      <FilterTop />
      <ProductGrid title="Dynamic" />
    </div>
  );
}
export default Products;
