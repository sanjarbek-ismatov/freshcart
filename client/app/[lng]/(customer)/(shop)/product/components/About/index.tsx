import "./About.css";
import { ProductType } from "@types";
import Link from "next/link";
import { AddToCard, Description, Star, Typography } from "@components";

function About({ product }: { product: ProductType }) {
  return (
    <div>
      <Link className="text-green-500 my-5" href="">
        {product.category.name}
      </Link>
      <Typography text={product.name} />
      <Star rating={product.rating} />
      <span className="text-sm text-slate-500">
        ({product.reviews.length}) izohlar
      </span>
      <h1 className="text-3xl my-3">${product.price}</h1>
      <AddToCard product={product} />
      <Description description={product.description} />
    </div>
  );
}

export default About;
