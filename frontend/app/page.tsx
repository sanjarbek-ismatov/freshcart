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
  ModalFormRegister,
  ModalFormLogin,
} from "./components";
import { useAuth } from "./hooks/useAuth";
export default function Home() {
  const auth = useAuth();
  const [show, setShow] = useState<"login" | "register" | "" | "setting">("");
  const closeRegisterRef = useRef<HTMLElement>(null);
  const openRegisterRef = useRef<HTMLElement>(null);
  const closeLoginRef = useRef<HTMLElement>(null);
  const openLoginRef = useRef<HTMLParagraphElement>(null);
  const handleShowRegister = useCallback(() => {
    if (!auth) setShow(show === "" ? "register" : "");
  }, [auth, show]);
  const handleShowLogin = useCallback(
    () => setShow(show === "login" ? "" : "login"),
    [show]
  );
  useEffect(() => {
    closeRegisterRef.current?.addEventListener("click", handleShowRegister);
    openRegisterRef.current?.addEventListener("click", handleShowRegister);
    openLoginRef.current?.addEventListener("click", handleShowLogin);
    closeLoginRef.current?.addEventListener("click", handleShowLogin);
    return () => {
      closeRegisterRef.current?.removeEventListener(
        "click",
        handleShowRegister
      );
      openRegisterRef.current?.removeEventListener("click", handleShowRegister);
      closeLoginRef.current?.removeEventListener("click", handleShowLogin);
    };
  }, [handleShowLogin, handleShowRegister]);

  return (
    <div className="container max-w-[1300px] mx-auto">
      <Navbar ref={openRegisterRef} />
      <Menu />
      <Swiper />
      <Categories />
      <PopularProducts />
      <About />
      <Footer />
      <SidePanel />
      {show === "register" && (
        <Modal ref={closeRegisterRef} title="Hisob yaratish">
          <ModalFormRegister ref={openLoginRef} />
        </Modal>
      )}
      {show === "login" && (
        <Modal ref={closeLoginRef} title="Kirish">
          <ModalFormLogin />
        </Modal>
      )}
    </div>
  );
}
