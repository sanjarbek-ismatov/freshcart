"use client";
import { Button, Input, LoadingModal, Modal, Typography } from "@components";
import { useLayoutEffect, useState } from "react";
import { useLoginAdminMutation } from "@store/api";
import FormParser from "@/app/utils/formParser";
import { setLocalData } from "@/app/utils/getLocalData";

function AdminAuthPage() {
  const [show, setShow] = useState(false);
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  useLayoutEffect(() => {
    setShow(true);
  }, []);
  const formParser = new FormParser();
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
      {isLoading && <LoadingModal />}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="shadow-xl border p-5 rounded-md text-center">
          <Typography text="Admin autentifikatsiyasi" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formParser.setForm(e);
              loginAdmin(formParser.getFormAsObject).then((data) => {
                setLocalData("admin", formParser.getFormAsObject.login);
                window.location.href = "/admin/dashboard";
              });
            }}
            className="p-3 text-left"
          >
            <Input label="Login" type="text" name="login" />
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
