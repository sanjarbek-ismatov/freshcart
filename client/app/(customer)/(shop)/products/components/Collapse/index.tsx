"use client";
import { useCallback, useState } from "react";
import "./Collapse.css";
import Link from "next/link";
import { CategoryType } from "@/types";

function Collapse({ category }: { category: CategoryType }) {
  const [show, setShow] = useState(false);
  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show]);
  return (
    <>
      <div
        onClick={handleShow}
        className="w-full cursor-pointer hover:bg-gray-100 px-3 py-1 border-b flex items-center justify-between my-1"
      >
        <p className="text-sm">{category.name}</p>{" "}
        <i
          className={`fa-solid ${
            show ? "fa-chevron-down" : "fa-chevron-right"
          }`}
        ></i>
      </div>
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden`}>
        <ul>
          {category.subCategories.map((e, i) => (
            <li key={i} className="my-3 ml-5">
              <Link className="text-sm" href={`products?category=${e.slug}`}>
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Collapse;
