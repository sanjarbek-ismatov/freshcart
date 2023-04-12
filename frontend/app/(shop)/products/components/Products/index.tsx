import ProductCard from "@/app/components/Product";
import "./Products.css";
import products from "@/data/products.json";
import { ProductGrid } from "@/app/components";
function Products() {
  return (
    <div className="w-full">
      <ProductGrid title="Dynamic" />
    </div>
  );
}
export default Products;
