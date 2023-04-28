import "./PopularProducts.css";
import ProductCard from "../Product";
import {Product} from "@/types";
const getProducts = async () => {
  const res = await fetch('http://localhost:4000/api/product/all')
  const data: Product[] = await res.json()
  return data
}
async function PopularProducts({ title }: { title: string }) {
  const products = await getProducts()
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <div className="my-5 grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-5 grid-rows-2">
          {products?.map((e, i) => (
            <ProductCard key={i} details={e} />
          ))}
        </div>
      </div>
    </>
  );
}
export default PopularProducts;
