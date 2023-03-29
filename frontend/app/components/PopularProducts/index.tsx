"use client";
import Image from "next/image";
import products from "data/products.json";
import "./PopularProducts.css";
function PopularProducts() {
  return (
    <>
      <div className="my-6">
        <h1 className="text-3xl font-bold text-slate-900">Popular Products</h1>
        <div className="my-5 grid sm:grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-rows-2">
          {products.map((e, i) => (
            <div
              className="relative group py-5 px-3 border hover:border-green-500  z-10 rounded-md"
              key={i}
            >
              <span className="bg-green-500 text-sm text-white px-2 rounded-md absolute top-[10px] left-[10px]">
                30%
              </span>
              <div className="flex justify-center items-center flex-col">
                <Image
                  width={250}
                  height={0}
                  src={e.image}
                  loader={() => e.image}
                  alt="Product image"
                />
                <div className="absolute  opacity-0 group-hover:opacity-100">
                  <i className="fa-regular bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-eye"></i>
                  <i className="fa-regular bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-heart"></i>
                </div>
              </div>
              <p className="text-slate-500 text-sm">{e.category.join(", ")}</p>
              <p className="text-lg font-medium">{e.title}</p>
              <div className="leading-7">
                {Array.from(
                  new Array(Math.floor(e.stars)),
                  (v, k) => k + 1
                ).map((e, i) => (
                  <i
                    key={i}
                    className="fa-solid text-sm text-yellow-500 fa-star"
                  ></i>
                ))}
                {e.stars === 5 ? (
                  <i className="fa-solid text-sm text-yellow-500 fa-star"></i>
                ) : Math.ceil(e.stars) > e.stars ? (
                  <i className="fa-regular text-sm text-yellow-500 fa-star-half-stroke"></i>
                ) : (
                  ""
                )}
                <span className="ml-2 text-slate-600">
                  {e.stars} ({e.bought})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default PopularProducts;
