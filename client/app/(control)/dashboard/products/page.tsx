"use client";
import {
  Filter,
  ProductsList,
} from "@/app/(control)/dashboard/products/components";
import { useState } from "react";
import Link from "next/link";

function ProductsDashboardPage() {
  const [text, setText] = useState("");
  return (
    <>
      <header className="w-full flex justify-between my-5">
        <h1 className="text-3xl font-semibold text-slate-800">Maxsulotlar</h1>
        <Link href="/dashboard/vendor/create">Maxsulot qo'shish</Link>
      </header>
      <main>
        <Filter text={text} setText={setText} />

        <ProductsList query={text} />
      </main>
    </>
  );
}

export default ProductsDashboardPage;
