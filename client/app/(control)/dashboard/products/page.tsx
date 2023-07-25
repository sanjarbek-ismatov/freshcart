"use client";
import {
  Filter,
  ProductsList,
} from "@/app/(control)/dashboard/products/components";
import { useState } from "react";
import Link from "next/link";
import { Typography } from "@components";

function ProductsDashboardPage() {
  const [text, setText] = useState("");
  return (
    <>
      <header className="w-full flex justify-between my-5">
        <Typography text="Maxsulotlar" />
        <Link href="/dashboard/create">Maxsulot qo'shish</Link>
      </header>
      <main>
        <Filter text={text} setText={setText} />

        <ProductsList query={text} />
      </main>
    </>
  );
}

export default ProductsDashboardPage;
