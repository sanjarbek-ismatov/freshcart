"use client";
import { useFormik } from "formik";
import { Button, Input } from "@components";
import { useVendorLoginMutation } from "@/store/api/ecommerce";

function LoginPage() {
  const [login] = useVendorLoginMutation();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values) {
      login(values).then((data) => {
        if ("error" in data) console.log(data.error);
        else if (data.data.token) {
          console.log(true);
          localStorage.setItem("x-vendor-token", data.data.token);
          window.location.reload();
        }
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="Rasmiy pochta"
        onChange={handleChange}
        value={values.email}
      />
      <Input
        name="password"
        type="password"
        placeholder="Maxfiy parol"
        onChange={handleChange}
        value={values.password}
      />
      <Button type="submit">Kirish</Button>
    </form>
  );
}

export default LoginPage;
