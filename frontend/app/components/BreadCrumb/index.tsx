"use client";
import Link from "next/link";
import "./BreadCrumb.css";
function BreadCrumb({ path }: { path: { title: string; path: string }[] }) {
  return (
    <>
      <div className="p-3 flex items-center">
        {path.map((e, i) => (
          <>
            <Link className="text-green-500" key={i} href={e.path}>
              {e.title}
            </Link>
            <span className="mx-3 text-sm text-slate-500">/</span>
          </>
        ))}
      </div>
    </>
  );
}
export default BreadCrumb;
