"use client";
import "./OffCanvas.css";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { useEffect } from "react";
import { CartProduct } from "@/app/components";

function OffCanvas() {
  const { isLoading, data, refetch } = useGetUserInfoQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="fixed right-0 top-0 z-10 bg-white min-h-screen h-full">
      <header className="flex justify-between items-center p-3">
        <i className="fa-solid text-xl fa-x cursor-pointer"></i>
        <h1 className="text-3xl">Hello</h1>
      </header>
      <main>
        {data?.cart.map((e, i) => (
          <CartProduct key={i} product={e.id} defCount={e.count} />
        ))}
      </main>
    </div>
  );
}

export default OffCanvas;
