import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "@components";
import LikeButton from "@/app/components/Product/LikeButton";
import { useUrlContext } from "@/app/context";
import { getTranslation } from "@internalization";
import { useCallback } from "react";
import { useAddToCartMutation } from "@store/api";

function ProductCard({ details }: { details: ProductType }) {
  const url = useUrlContext();
  const t = getTranslation("uz");
  const [addToCart] = useAddToCartMutation();
  const handleSubmit = useCallback(() => {
    addToCart({
      type: "cart",
      id: details._id,
      count: 1,
    });
  }, [addToCart, details._id]);
  const generalDiscount = details.discounts.reduce(
    (acc, currentValue) => acc + currentValue.percent,
    0,
  );
  return (
    <Link
      href={`/product/${details.slug}`}
      className="relative group py-5 px-3 border hover:border-green-500 m-2 z-10 rounded-md"
    >
      {generalDiscount ? (
        <span className="bg-green-500 text-sm text-white px-2 rounded-md absolute top-[10px] left-[10px]">
          {generalDiscount}%
        </span>
      ) : (
        ""
      )}
      <div className="flex justify-center items-center flex-col min-w-[200px] w-[270px] h-[200px]">
        <Image
          width={400}
          height={400}
          className="h-full w-auto object-cover"
          src={`${url}/files/image/${details.images[0]}`}
          alt="Product image"
          unoptimized
        />
        <div className="absolute  opacity-0 group-hover:opacity-100">
          <LikeButton id={details._id} />
        </div>
      </div>
      <p className="text-slate-500 text-sm">{details.category.name}</p>
      <p className="text-lg font-medium">{details.name}</p>
      <div className="leading-7">
        <Star rating={details.rating} />
        <span className="ml-2 text-slate-600">
          {details.rating} ({details.reviews.length})
        </span>
      </div>
      <div className="flex justify-between mt-4">
        <span>${details.price}</span>{" "}
        <button
          onClick={handleSubmit}
          className="py-1 px-2 border-slate-200 border text-green-500 text-[10px] rounded-md"
        >
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
