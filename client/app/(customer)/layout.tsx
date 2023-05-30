"use client";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Menu,
  Modal,
  ModalFormLogin,
  ModalFormRegister,
  Navbar,
} from "@/app/components";
import { useAuth } from "@/app/hooks/useAuth";
import { UserProvider } from "@/app/context/provider";
import Provider from "@/store/provider";

function CustomerLayout({ children }: { children: ReactNode }) {
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
    <UserProvider>
      <Provider>
        <Navbar />
        <Menu />
        <div className="mx-auto max-w-[1300px] container">{children}</div>
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
      </Provider>
    </UserProvider>
  );
}

export default CustomerLayout;
