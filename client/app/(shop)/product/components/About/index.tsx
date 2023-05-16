import "./About.css";
import { ProductType } from "@/types";
import Link from "next/link";
import { AddToCard, Star } from "@/app/components";

function About({ product }: { product: ProductType }) {
  return (
    <div>
      <Link className="text-green-500 my-5" href="">
        {product.category}
      </Link>
      <h1 className="text-5xl font-semibold my-5">{product.name}</h1>
      <Star rating={product.rating} />
      <span className="text-sm text-slate-500">
        ({product.reviews.length}) izohlar
      </span>
      <h1 className="text-3xl my-3">${product.price}</h1>
      <AddToCard product={product} />
    </div>
  );
}

export default About;
