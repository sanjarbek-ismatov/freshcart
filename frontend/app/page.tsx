"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Swiper,
  Menu,
  Navbar,
  Categories,
  PopularProducts,
  About,
  Footer,
  Modal,
  SidePanel,
  Button,
} from "./components";
export default function Home() {
  const [show, setShow] = useState(false);
  const closeRef = useRef<HTMLElement>(null);
  const openRef = useRef<HTMLElement>(null);
  const handleShow = useCallback(() => setShow(!show), [show]);
  useEffect(() => {
    closeRef.current?.addEventListener("click", handleShow);
    openRef.current?.addEventListener("click", handleShow);

    return () => {
      closeRef.current?.removeEventListener("click", handleShow);
      openRef.current?.removeEventListener("click", handleShow);
    };
  }, [handleShow]);

  return (
    <div className="container max-w-[1300px] mx-auto">
      <Navbar ref={openRef} />
      <Menu />
      <Swiper />
      <Categories />
      <PopularProducts />
      <About />
      <Footer />
      <SidePanel />
      {show && (
        <Modal ref={closeRef} title="Hisob yaratish">
          <div className="w-full py-1">
            <label className="text-sm text-slate-800" htmlFor="name">
              Ism
            </label>
            <br />

            <input
              className="w-full mt-2 px-3 py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md"
              id="name"
              type="text"
              name="name"
              placeholder="Ismingiz"
            />
          </div>
          <div className="w-full py-1">
            <label className="text-sm text-slate-800" htmlFor="username">
              Foydalanuvchi ismi
            </label>
            <br />
            <input
              className="w-full mt-2 px-3 py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="w-full py-1">
            <label className="text-sm text-slate-800" htmlFor="phone">
              Telefon raqam
            </label>
            <br />
            <input
              className="w-full mt-2 px-3 py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md"
              id="phone"
              type="text"
              name="phone"
              placeholder="Raqamingiz"
            />
          </div>
          <div className="w-full py-1">
            <label className="text-sm text-slate-800" htmlFor="email">
              Pochta
            </label>
            <br />
            <input
              className="w-full mt-2 px-3 py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md"
              id="email"
              type="email"
              name="email"
              placeholder="Pochta"
            />
          </div>
          <div className="w-full py-1">
            <label className="text-sm text-slate-800" htmlFor="password">
              Parol
            </label>
            <br />
            <input
              className="w-full mt-2 px-3 py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md"
              id="password"
              type="password"
              name="password"
              placeholder="Parol"
            />
          </div>
          <div className="w-full py-4 text-center">
            <Button>Hisob yaratish</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
