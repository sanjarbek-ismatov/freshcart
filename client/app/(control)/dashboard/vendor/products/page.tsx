"use client";
import { Button } from "@/app/components";
import {
  Filter,
  ProductsList,
} from "@/app/(control)/dashboard/vendor/products/components";
import { useState } from "react";

function ProductsDashboardPage() {
  const [text, setText] = useState("");
  return (
    <>
      <header className="w-full flex justify-between my-5">
        <h1 className="text-3xl font-semibold text-slate-800">Maxsulotlar</h1>
        <Button>Maxsulot qo'shish</Button>
      </header>
      <main>
        <Filter text={text} setText={setText} />

        <ProductsList query={text} />
      </main>
    </>
  );
}

export default ProductsDashboardPage;
