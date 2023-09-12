import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Star } from "@components";
import LikeButton from "@/app/components/Product/LikeButton";
import { useUrlContext } from "@/app/context";
import { getTranslation } from "@internalization";

function ProductCard({ details }: { details: ProductType }) {
  const url = useUrlContext();
  const t = getTranslation("uz");
  return (
    <div className="relative group py-5 px-3 border hover:border-green-500 m-1 z-10 rounded-md">
      <span className="bg-green-500 text-sm text-white px-2 rounded-md absolute top-[10px] left-[10px]">
        30%
      </span>
      <div className="flex justify-center items-center flex-col max-w-[200px] h-[200px]">
        <Image
          width={250}
          height={250}
          className="h-full w-auto object-cover"
          src={`${url}/files/image/${details.images[0]}`}
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
        <button className="p-1 bg-green-500 text-white rounded-md">
          +{t.cart}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
