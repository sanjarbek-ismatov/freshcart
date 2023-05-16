"use client";
import "./OffCanvas.css";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { forwardRef, useEffect } from "react";
import { CartProduct } from "@/app/components";

const OffCanvas = forwardRef<HTMLElement, { show: boolean }>(function OffCanvas(
  { show },
  ref
) {
  const { isLoading, data, refetch } = useGetUserInfoQuery();
  useEffect(() => {
    const offCanvas = document.getElementById("offcanvas") as HTMLDivElement;
    document.addEventListener("click", (event) => {
      if (!offCanvas?.contains(event?.target as any)) {
        offCanvas.classList.remove("showCanvas");
        offCanvas.classList.add("hideCanvas");
      }
    });
  }, []);
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className="w-full min-h-screen h-full fixed top-0 left-0 backdrop-brightness-50 z-20">
      <div
        id="offcanvas"
        className={`fixed ${
          show ? "showCanvas" : "hideCanvas"
        } right-0 top-0 z-10 transition-transform duration-500 bg-white min-h-screen h-full`}
      >
        <header className="flex justify-between items-center p-3">
          <i ref={ref} className="fa-solid text-xl fa-x cursor-pointer"></i>
          <h1 className="text-3xl">Hello</h1>
        </header>
        <main>
          {data?.cart.map((e, i) => (
            <CartProduct key={i} product={e.id} defCount={e.count} />
          ))}
        </main>
      </div>
    </div>
  );
});

export default OffCanvas;
