import "./About.css";
import { ProductType } from "@types";
import Link from "next/link";
import { AddToCard, Star } from "@components";

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
      <h4 className="text-slate-800 font-semibold text-xl">Maxsulot haqida</h4>
      <p>{product.description}</p>
    </div>
  );
}

export default About;
