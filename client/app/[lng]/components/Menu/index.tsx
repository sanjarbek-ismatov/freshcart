"use client";
import Link from "next/link";
import "./Menu.css";
import { useCallback, useState } from "react";
import { useGetAllCategoryQuery } from "@/store/api/ecommerce";
import { getTranslation } from "@internalization";
import { CategoryType } from "@types";

function MenuItem({ category }: { category: CategoryType }) {
  const [show, setShow] = useState(false);
  return (
    <li className="py-1">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between select-none cursor-pointer"
      >
        <p className="font-bold ">{category.name}</p>{" "}
        <i
          style={{
            transform: show ? "rotate(90deg)" : "rotate(0deg)",
          }}
          className="fa-solid fa-chevron-right text-[10px]"
        ></i>
      </div>
      <div className={`pl-2 overflow-hidden ${show ? "h-auto" : "h-0"}`}>
        {category.subCategories.map((subC, i) => (
          <Link key={i} href={`/products?category=${subC.slug}`}>
            <p className="text-sm p-2 hover:bg-gray-200 rounded-md">
              {subC.name}
            </p>
          </Link>
        ))}
      </div>
    </li>
  );
}

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
        <div className="relative">
          <button
            onClick={toggle}
            className=" py-3 px-4 bg-green-500 rounded-md text-white"
          >
            <i className="fa-regular fa-square-plus"></i> {t["all-category"]}
          </button>
          <ul
            className={`absolute  translate-y-2 ease-in duration-300  opacity-0 border text-slate-600 border-slate-300 px-3 py-2 w-36 rounded-md z-10 bg-white ${
              show ? "opacity-100 block translate-y-0" : "hidden"
            }`}
          >
            {data?.map((e, i) => <MenuItem key={i} category={e} />)}
          </ul>
        </div>
        <Link href="/" className="mx-3 text-slate-600 font-medium">
          {t.home}
        </Link>
        <Link href="/products" className="mx-3 text-slate-600 font-medium">
          {t.products}
        </Link>
        <Link href="/stores" className="mx-3 text-slate-600 font-medium">
          {t.stores}
        </Link>
      </div>
    </>
  );
}

export default Menu;
