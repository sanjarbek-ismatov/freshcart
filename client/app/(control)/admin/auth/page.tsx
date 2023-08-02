"use client";
import { Button, Input, Modal, Typography } from "@components";
import { useLayoutEffect, useState } from "react";

function AdminAuthPage() {
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      {show && (
        <Modal setShow={setShow} title="Diqqat!">
          <p>
            Ushbu qism faqat adminlar uchun. Agar siz ham admin bo'lishni
            xohlasangiz unda menga murojaat qiling! Noto'g'ri ish qilsangiz
            "chopilasiz"!
          </p>
        </Modal>
      )}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="shadow-xl border p-5 rounded-md text-center">
          <Typography text="Admin autentifikatsiyasi" />
          <form className="p-3 text-left">
            <Input label="Login" type="email" name="login" />
            <Input label="Parol" type="password" name="password" />
            <div className="text-center">
              <Button type="submit">Kirish</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminAuthPage;
