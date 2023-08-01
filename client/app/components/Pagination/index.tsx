"use client";
import "./Panigation.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

function Panigation({
  length,
  currentPage,
  baseURL,
}: {
  length: number;
  currentPage: number;
  baseURL: string;
}) {
  const searchParams = useSearchParams();
  const pageCount = useMemo(
    () =>
      [...Array.from(new Array(length), (v, k) => ++k)].map((e, i) => {
        return getFixedPath(e);
      }),
    [getFixedPath, length],
  );

  function getFixedPath(page: number) {
    const param = new URLSearchParams(searchParams);
    param.set("page", page.toString());
    return {
      path: `${baseURL}?${param.toString()}`,
      title: page,
    };
  }

  return (
    <>
      <div className="flex">
        <Link
          href={
            getFixedPath(currentPage > 1 ? currentPage - 1 : currentPage).path
          }
        >
          <div className="w-10 h-10 mx-1 rounded-md border flex justify-center items-center">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </Link>
        {pageCount.map((e, i) => (
          <Link key={i} href={e.path}>
            <div className="w-10 h-10 mx-1 rounded-md text-white bg-green-500 flex justify-center items-center">
              {e.title}
            </div>
          </Link>
        ))}
        <Link
          href={
            getFixedPath(currentPage < length ? currentPage + 1 : currentPage)
              .path
          }
        >
          <div className="w-10 h-10 mx-1 rounded-md  border flex justify-center items-center">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Panigation;
