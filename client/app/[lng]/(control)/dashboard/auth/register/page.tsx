"use client";
import { BreadCrumb, Button, Input } from "@components";
import React, { FormEvent, useState } from "react";
import { useVendorRegisterMutation } from "@/store/api/ecommerce";

import { useRouter } from "next/navigation";
import FormParser from "@/app/utils/formParser";

function VendorRegisterPage() {
  const [register, { isLoading }] = useVendorRegisterMutation();
  const [form, setForm] = useState<FormEvent>();
  const formParser = new FormParser();
  const router = useRouter();
  return (
    <div>
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Sotuvchi", path: "/vv" },
          { title: "Autentifikatsiya", path: "/vv/auth" },
          { title: "Ro'yhatdan o'tish", path: "/vv/auth/register" },
        ]}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formParser.setForm(e);
          register(formParser.getFormAsFormData);
        }}
        className="w-96"
        encType="multipart/form-data"
      >
        <Input name="name" placeholder="Do'konning nomi" />
        <Input name="email" placeholder="Rasmiy pochta" />
        <Input name="slug" placeholder="Takrorlanmas nom" />
        <Input name="phone" placeholder="Telefon raqam" />
        <Input name="category" placeholder="Do'kon kategoriyasi" />
        <Input
          // pattern="^[^\d](?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
          name="password"
          placeholder="Maxfiy parol"
        />
        <Input type="file" name="image" />
        <Input type="file" name="banner" />
        <Button type="submit">Ro`yhatdan o`tish</Button>
      </form>
    </div>
  );
}

export default VendorRegisterPage;
