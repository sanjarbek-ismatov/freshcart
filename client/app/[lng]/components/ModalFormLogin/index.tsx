"use client";
import { useFormik } from "formik";
import Button from "../Button";
import Input from "../Input";
import "./ModalFormLogin.css";
import { useLoginMutation } from "@/store/api/ecommerce";
import { DefaultToastComponent, LoadingModal } from "@/app/components";
import { toast } from "react-toastify";
import { toastOptions } from "@/app/utils/constants";
import Link from "next/link";
import React from "react";

function ModalFormLogin() {
  const [login, { isLoading }] = useLoginMutation();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values, formikHelpers) {
      login(values).then((data) => {
        if ("data" in data) {
          localStorage.setItem("x-token", data.data.token as any);
          toast.success(data.data.message, toastOptions);
          window.location.reload();
        } else if ("error" in data) {
          const error: any = data.error;
          toast.error(error.data.message, toastOptions);
        }
      });
    },
  });
  return (
    <>
      <DefaultToastComponent />
      {isLoading && <LoadingModal />}
      <form onSubmit={handleSubmit}>
        <div className="w-full py-1">
          <label className="text-sm text-slate-800" htmlFor="email">
            Pochta
          </label>
          <br />
          <Input
            required
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Pochta"
          />
        </div>
        <div className="w-full py-1">
          <label className="text-sm text-slate-800" htmlFor="password">
            Parol
          </label>
          <br />
          <Input
            required
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Parol"
          />
        </div>
        <div className="w-full py-3 text-center">
          <Button type="submit">Kirish</Button>
          <br />
          <Link
            className="text-green-500 text-sm cursor-pointer"
            href="/register"
          >
            Hisob yaratish kerakmi?
          </Link>
          <br />
          <Link
            href="/dashboard"
            className="text-green-500 text-sm cursor-pointer"
          >
            Sotuvchimisiz?
          </Link>
        </div>
      </form>
    </>
  );
}

export default ModalFormLogin;
