"use client";
import React, { ReactNode, useState } from "react";
import { Menu, Navbar } from "@components";
import { useAuth } from "@/app/hooks/useAuth";

function CustomerLayout({ children }: { children: ReactNode }) {
  const auth = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowRegister} />
      <Menu />
      <div className="mx-auto max-w-[1300px] container">{children} hello</div>
    </>
  );
}

export default CustomerLayout;
