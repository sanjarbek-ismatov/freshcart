"use client";
import "./NavbarContainer.css";
import {
  Modal,
  ModalFormLogin,
  ModalFormRegister,
  Navbar,
} from "@/app/components";
import React, { useState } from "react";
import { getTranslation } from "@internalization";

function NavbarContainer() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const t = getTranslation("uz");
  return (
    <>
      <Navbar setShowModal={setShowRegister} />
      {showRegister && (
        <Modal setShow={setShowRegister} title={t["create-account"]}>
          <ModalFormRegister setShowLogin={setShowLogin} />
        </Modal>
      )}
      {showLogin && (
        <Modal setShow={setShowLogin} title={t["login"]}>
          <ModalFormLogin />
        </Modal>
      )}
    </>
  );
}

export default NavbarContainer;
