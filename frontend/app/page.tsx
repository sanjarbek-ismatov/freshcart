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
  ModalFormRegister,
  ModalFormLogin,
} from "./components";
export default function Home() {
  const [show, setShow] = useState<"login" | "register" | "">("");
  const closeRef = useRef<HTMLElement>(null);
  const openRef = useRef<HTMLElement>(null);
  const handleShowRegister = useCallback(() => setShow("register"), []);
  useEffect(() => {
    closeRef.current?.addEventListener("click", handleShowRegister);
    openRef.current?.addEventListener("click", handleShowRegister);

    return () => {
      closeRef.current?.removeEventListener("click", handleShowRegister);
      openRef.current?.removeEventListener("click", handleShowRegister);
    };
  }, [handleShowRegister]);

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
      {show === "register" && (
        <Modal ref={closeRef} title="Hisob yaratish">
          <ModalFormRegister />
        </Modal>
      )}
      {show === "login" && (
        <Modal ref={closeRef} title="Hisob yaratish">
          <ModalFormLogin />
        </Modal>
      )}
    </div>
  );
}
