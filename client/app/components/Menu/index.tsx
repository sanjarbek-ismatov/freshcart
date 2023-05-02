"use client";
import Link from "next/link";
import "./Menu.css";
import { useCallback, useState } from "react";

function Menu() {
  const [show, setShow] = useState(false);
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
            <i className="fa-regular fa-square-plus"></i> Barchasi
          </button>
          <ul
            className={`absolute transition-all translate-y-2 hidden ease-in duration-300  opacity-0 border text-slate-600 border-slate-300 p-3 w-36 rounded-md z-10 bg-white ${
              show ? "opacity-100 block translate-y-0" : ""
            }`}
          >
            <li className="py-1">
              <Link href="/">Maishiy texnika</Link>
            </li>
            <li className="py-1">
              <Link href="/">Sport anjomlari</Link>
            </li>
            <li className="py-1">
              <Link href="/">Oziq-ovqat</Link>
            </li>
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
