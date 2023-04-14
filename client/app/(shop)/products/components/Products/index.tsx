import FilterTop from "../FilterTop";
import Panigation from "../Panigation";
import "./Products.css";
import { ProductGrid } from "@/app/components";
function Products() {
  return (
    <div className="w-full">
      <FilterTop />
      <ProductGrid title="Dynamic" />
      <Panigation />
    </div>
  );
}
export default Products;
