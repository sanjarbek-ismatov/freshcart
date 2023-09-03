"use client";
import { Button, Input, LoadingPage, Typography } from "@components";
import { useGetControllerInfoQuery } from "@store/api";
import { useState } from "react";

function SettingsLayout() {
  const [editable, setEditable] = useState(false);
  const { data, isFetching } = useGetControllerInfoQuery();
  return (
    <>
      <Typography text="Sozlamalar" />
      {isFetching ? (
        <LoadingPage />
      ) : (
        <form>
          <Input
            label="Do'kon nomi"
            name="name"
            defaultValue={data?.vendor.name}
            disabled={!editable}
          />
          <Input
            label="Maxsus nom"
            name="slug"
            defaultValue={data?.vendor.slug}
            disabled={!editable}
          />
          <Input
            label="Telefon raqam"
            name="phone"
            defaultValue={data?.vendor.phone}
            disabled={!editable}
          />
          <Input
            label="Email"
            name="email"
            defaultValue={data?.vendor.email}
            disabled={!editable}
          />
          <Button type="submit">Saqlash</Button>
        </form>
      )}
    </>
  );
}
export default SettingsLayout