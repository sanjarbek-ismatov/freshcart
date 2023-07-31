"use client";
import { Button, Modal, Spinner } from "..";
import { useFormik } from "formik";
import Input from "../Input";
import "./ModalFormRegister.css";
import { useSignUpMutation } from "@/store/api/ecommerce";
import React from "react";
import Link from "next/link";

function ModalForm({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [signUp, { isLoading }] = useSignUpMutation();
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      username: "",
      phone: "",
      email: "",
      password: "",
    },
    onSubmit(values) {
      signUp(values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      {isLoading && (
        <Modal title="Diqqat!">
          <div className="flex">
            <Spinner /> <span className="ml-3">Yuklanmoqda...</span>
          </div>
        </Modal>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          required
          id="name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          label="Ismingiz"
        />

        <Input
          required
          id="username"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          label="Username"
        />

        <Input
          required
          id="phone"
          type="tel"
          name="phone"
          pattern="^\+[0-9]{12}"
          value={values.phone}
          onChange={handleChange}
          label="Raqamingiz"
        />

        <Input
          required
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Pochta"
        />

        <Input
          required
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          label="Parol"
        />

        <div className="w-full py-3 text-center">
          <Button type="submit">Hisob yaratish</Button>
          <p
            onClick={() => setShowLogin(true)}
            className="text-green-500 text-sm cursor-pointer"
          >
            Hisobingiz mavjudmi?
          </p>
          <Link
            href="/dashboard/auth"
            className="text-green-500 text-sm cursor-pointer"
          >
            Sotuvchimisiz?
          </Link>
        </div>
      </form>
    </>
  );
}

export default ModalForm;
