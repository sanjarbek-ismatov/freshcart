"use client";
import Link from "next/link";
import "./Menu.css";
import { useState } from "react";
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
  const t = getTranslation("uz");
  return (
      <div className="flex items-center mb-6 max-w-[1300px] mx-auto">
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
  );
}

export default Menu;
