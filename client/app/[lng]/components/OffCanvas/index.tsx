"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import EmptyCart from "public/images/emptry_cart.png";
import { Button, CartProduct } from "@components";
import "./OffCanvas.css";
import { UserType } from "@types";

function OffCanvas({
  show,
  setShow,
  cart,
  refetch,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  cart?: UserType["cart"];
  refetch: any;
}) {
  const realCart = useMemo(() => cart?.filter((e) => e.id), [cart]);
  useEffect(() => {
    show && refetch();
  }, [show, refetch]);
  useEffect(() => {
    const offCanvas = document.getElementById("offcanvas") as HTMLDivElement;
    const offCanvasBackdrop = document.getElementById(
      "offcanvasback",
    ) as HTMLDivElement;

    function handleClick() {
      setShow(!show);
    }

    function handleMouseLeave() {
      offCanvasBackdrop.addEventListener("click", handleClick);
    }

    function handleMouseEnter() {
      offCanvasBackdrop.removeEventListener("click", handleClick);
    }

    offCanvas.addEventListener("mouseleave", handleMouseLeave);
    offCanvas.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      offCanvas.removeEventListener("mouseenter", handleMouseEnter);
      offCanvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [setShow, show]);

  return (
    <div
      id="offcanvasback"
      className={`${
        show &&
        "w-full min-h-screen h-full fixed top-0 left-0 backdrop-brightness-50 z-20"
      }`}
    >
      <div
        id="offcanvas"
        className={`fixed ${
          show ? "showCanvas" : "hideCanvas"
        } right-0 top-0 z-30 p-3 transition-transform max-w-[600px] min-w-[300px] duration-500 bg-white min-h-screen h-full`}
      >
        <header className="flex border justify-between items-center p-3">
          <i
            onClick={() => setShow(false)}
            className="fa-solid text-slate-600 text-md fa-x cursor-pointer"
          ></i>
          <h1 className="text-2xl">Savatcha</h1>
        </header>
        <main>
          {realCart?.length ? (
            realCart.map((e, i) => (
              <CartProduct key={i} count={e.count} product={e.id} />
            ))
          ) : (
            <div className="w-full text-center py-4 leading-9">
              <Image
                className="w-[70px] h-auto m-auto"
                src={EmptyCart}
                alt="Bo'sh savatcha"
              />
              <p>Savatcha bo'sh</p>
            </div>
          )}
        </main>
        <footer className="absolute bottom-0 left-0 p-3">
          <Link href="/account/checkout">
            <Button>Sotib olish</Button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default OffCanvas;
