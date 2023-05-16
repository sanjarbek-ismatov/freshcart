"use client";
import { useFormik } from "formik";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import Spinner from "../Spinner";
import "./ModalFormLogin.css";
import { useLoginMutation } from "@/store/api/ecommerce";

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
          window.location.reload();
        }
      });
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
        </div>
      </form>
    </>
  );
}

export default ModalFormLogin;
