"use client";
import { BreadCrumb, Button, Input } from "@/app/components";
import { useFormik } from "formik";
import React from "react";
import { useVendorRegisterMutation } from "@/store/api/ecommerce";

function VendorRegisterPage() {
  const [register, { isLoading }] = useVendorRegisterMutation();
  const { handleSubmit, setFieldValue, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      slug: "",
      category: "",
      phone: "",
      email: "",
      password: "",
      image: null,
      banner: null,
    },
    onSubmit(values, helpers) {
      register(values);
    },
  });
  return (
    <div>
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Sotuvchi", path: "/vendor" },
          { title: "Autentifikatsiya", path: "/vendor/auth" },
          { title: "Ro'yhatdan o'tish", path: "/vendor/auth/register" },
        ]}
      />
      <form
        className="w-96"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={handleChange}
          value={values.name}
          name="name"
          placeholder="Do'konning nomi"
        />
        <Input
          onChange={handleChange}
          value={values.email}
          name="email"
          placeholder="Rasmiy pochta"
        />
        <Input
          onChange={handleChange}
          value={values.slug}
          name="slug"
          placeholder="Takrorlanmas nom"
        />
        <Input
          onChange={handleChange}
          value={values.phone}
          name="phone"
          placeholder="Telefon raqam"
        />
        <Input
          onChange={handleChange}
          value={values.category}
          name="category"
          placeholder="Do'kon kategoriyasi"
        />
        <Input
          onChange={handleChange}
          value={values.password}
          pattern="^[^\d](?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
          name="password"
          placeholder="Maxfiy parol"
        />
        <Input
          type="file"
          name="image"
          onChange={(e) => {
            if (e.currentTarget.files)
              setFieldValue("image", e.currentTarget.files[0]);
          }}
        />
        <Input
          type="file"
          name="banner"
          onChange={(e) => {
            if (e.currentTarget.files) {
              setFieldValue("banner", e.currentTarget?.files[0]);
            }
          }}
        />
        <Button type="submit">Ro`yhatdan o`tish</Button>
      </form>
    </div>
  );
}

export default VendorRegisterPage;
