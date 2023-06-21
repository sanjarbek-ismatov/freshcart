"use client";
import "./NavbarContainer.css";
import {
  Modal,
  ModalFormLogin,
  ModalFormRegister,
  Navbar,
} from "@/app/components";
import React, { useState } from "react";

function NavbarContainer() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowRegister} />
      {showRegister && (
        <Modal setShow={setShowRegister} title="Hisob yaratish">
          <ModalFormRegister setShowLogin={setShowLogin} />
        </Modal>
      )}
      {showLogin && (
        <Modal setShow={setShowLogin} title="Kirish">
          <ModalFormLogin />
        </Modal>
      )}
    </>
  );
}

export default NavbarContainer;
