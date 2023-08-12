"use client";
import Link from "next/link";
import "./Menu.css";
import { useCallback, useState } from "react";
import { useGetAllCategoryQuery } from "@/store/api/ecommerce";
import { getTranslation } from "@internalization";

function Menu() {
  const [show, setShow] = useState(false);
  const { data } = useGetAllCategoryQuery();
  const t = getTranslation("uz");
  const toggle = useCallback(() => {
    setShow(!show);
  }, [show]);
  return (
    <>
      <div className="flex items-center mb-5 max-w-[1300px] mx-auto">
        <div onClick={toggle} className="relative">
          <button className=" py-3 px-4 bg-green-500 rounded-md text-white">
            <i className="fa-regular fa-square-plus"></i> {t["all-category"]}
          </button>
          <ul
            className={`absolute transition-all translate-y-2 ease-in duration-300  opacity-0 border text-slate-600 border-slate-300 p-3 w-36 rounded-md z-10 bg-white ${
              show ? "opacity-100 block translate-y-0" : "hidden"
            }`}
          >
            {data?.map((e, i) => (
              <li key={i} className="py-1">
                <p className="font-bold">{e.name}</p>
                <div className="pl-2">
                  {e.subCategories.map((e, i) => (
                    <Link key={i} href={`/products?category=${e.slug}`}>
                      <p className="text-sm p-2 hover:bg-gray-200 rounded-md">
                        {e.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="mx-3 text-slate-600 font-medium">
          Uy
        </Link>
        <Link href="/products" className="mx-3 text-slate-600 font-medium">
          Maxsulotlar
        </Link>
        <Link href="/stores" className="mx-3 text-slate-600 font-medium">
          Do`konlar
        </Link>
      </div>
    </>
  );
}

export default Menu;
