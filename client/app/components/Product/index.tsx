import { Product } from "@/types";
import Image from "next/image";
function ProductCard({ details }: { details: Product }) {
  return (
    <div className="relative group py-5 px-3 border hover:border-green-500  z-10 rounded-md">
      <span className="bg-green-500 text-sm text-white px-2 rounded-md absolute top-[10px] left-[10px]">
        30%
      </span>
      <div className="flex justify-center items-center flex-col">
        <Image
          width={250}
          height={0}
          src={details.image}
          loader={() => details.image}
          alt="Product image"
          unoptimized
        />
        <div className="absolute  opacity-0 group-hover:opacity-100">
          <i className="fa-regular bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-eye"></i>
          <i className="fa-regular bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-heart"></i>
        </div>
      </div>
      <p className="text-slate-500 text-sm">{details.category.join(", ")}</p>
      <p className="text-lg font-medium">{details.title}</p>
      <div className="leading-7">
        {/*{Array.from(new Array(Math.floor(details.stars)), (v, k) => k + 1).map(*/}
        {/*  (e, i) => (*/}
        {/*    <i key={i} className="fa-solid text-sm text-yellow-500 fa-star"></i>*/}
        {/*  )*/}
        {/*)}*/}
        {details.stars === 5 ? (
          <i className="fa-solid text-sm text-yellow-500 fa-star"></i>
        ) : Math.ceil(details.stars) > details.stars ? (
          <i className="fa-regular text-sm text-yellow-500 fa-star-half-stroke"></i>
        ) : (
          ""
        )}
        <span className="ml-2 text-slate-600">
          {details.stars} ({details.bought})
        </span>
      </div>
      <div className="flex justify-between mt-4">
        <span>${details.cost}</span>{" "}
        <button className="p-1 bg-green-500 text-white rounded-md">
          +Savat
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
