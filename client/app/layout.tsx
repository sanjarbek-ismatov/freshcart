"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  ErrorBoundary,
  Menu,
  Modal,
  ModalFormLogin,
  ModalFormRegister,
  Navbar,
} from "./components";
import Provider from "@/store/provider";
import { useAuth } from "./hooks/useAuth";
import { useCallback, useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin", "cyrillic"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    console.log(show);
  }, [show]);
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
    <html lang="uz">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <title>Freshcart</title>
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Provider>
            <Navbar ref={openRegisterRef} />
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
        </ErrorBoundary>
      </body>
    </html>
  );
}
