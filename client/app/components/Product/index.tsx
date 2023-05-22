import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "@/app/components";
import LikeButton from "@/app/components/Product/LikeButton";

function ProductCard({ details }: { details: ProductType }) {
  return (
    <div className="relative group py-5 px-3 border hover:border-green-500  z-10 rounded-md">
      <span className="bg-green-500 text-sm text-white px-2 rounded-md absolute top-[10px] left-[10px]">
        30%
      </span>
      <div className="flex justify-center items-center flex-col h-[170px]">
        <Image
          width={250}
          height={250}
          src={`http://localhost:4000/api/files/image/${details.images[0]}`}
          alt="Product image"
          unoptimized
        />
        <div className="absolute  opacity-0 group-hover:opacity-100">
          <Link href={`/product/${details.slug}`}>
            <i className="fa-regular bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-eye"></i>
          </Link>
          <LikeButton id={details._id} />
        </div>
      </div>
      <p className="text-slate-500 text-sm">{details.category.join(", ")}</p>
      <p className="text-lg font-medium">{details.name}</p>
      <div className="leading-7">
        <Star rating={details.rating} />
        <span className="ml-2 text-slate-600">
          {details.rating} ({details.reviews.length})
        </span>
      </div>
      <div className="flex justify-between mt-4">
        <span>${details.price}</span>{" "}
        <button className="p-1 bg-green-500 text-white rounded-md">
          +Savat
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
