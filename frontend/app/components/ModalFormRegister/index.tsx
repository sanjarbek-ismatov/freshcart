"use client";
import { Button, Modal, Spinner } from "..";
import { useFormik } from "formik";
import Input from "../Input";
import "./ModalFormRegister.css";
import { useSignUpMutation } from "@/store/api/ecommerce";
import { forwardRef } from "react";
const ModalForm = forwardRef<HTMLParagraphElement>(function ModalForm(
  props,
  paragraphRef
) {
  const [signUp, { isLoading, isSuccess, isError }] = useSignUpMutation();
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      username: "",
      phone: "",
      email: "",
      password: "",
    },
    onSubmit(values, formikHelpers) {
      console.log(values);
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
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="w-full py-1">
          <label className="text-sm text-slate-800" htmlFor="name">
            Ism
          </label>
          <br />

          <Input
            required
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Ismingiz"
          />
        </div>
        <div className="w-full py-1">
          <label className="text-sm text-slate-800" htmlFor="username">
            Foydalanuvchi ismi
          </label>
          <br />
          <Input
            required
            id="username"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="w-full py-1">
          <label className="text-sm text-slate-800" htmlFor="phone">
            Telefon raqam
          </label>
          <br />
          <Input
            required
            id="phone"
            type="tel"
            name="phone"
            pattern="^\+[0-9]{12}"
            value={values.phone}
            onChange={handleChange}
            placeholder="Raqamingiz"
          />
        </div>
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
          <Button type="submit">Hisob yaratish</Button>
          <p
            ref={paragraphRef}
            className="text-green-500 text-sm cursor-pointer"
          >
            Hisobingiz mavjudmi?
          </p>
        </div>
      </form>
    </>
  );
});
export default ModalForm;
