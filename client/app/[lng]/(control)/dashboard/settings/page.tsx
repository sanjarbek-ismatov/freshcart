"use client";
import {
  Button,
  Input,
  LoadingPage,
  ProfileImage,
  Typography,
} from "@components";
import { useGetControllerInfoQuery } from "@store/api";
import { useState } from "react";
import { VendorWithOrders } from "@types";
import { useUrlContext } from "@/app/context";

function VendorSettingsLeft({ data }: { data?: VendorWithOrders }) {
  const [editable, setEditable] = useState(false);

  return (
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
  );
}
function VendorPasswordChangeSetting(){
  return <><Typography
      text="Parolni o'zgartirish"
      color="text-red-500"
      size="sm"
  />
  <form>
    <Input label="Joriy parolni kiriting" type="password" />
    <Input
        label="Yangi parolni kiriting"
        type="password"
        name="password"
    />
    <Input
        onChange={(e: any) => {
          console.log(e.currentTarget.getAttribute("valid"));
        }}
        label="Parolni qayta kiriting"
        type="password"
    />
  </form>
      </>
}
function VendorProfileImageSetting({image}: {image?: string}){
  const url = useUrlContext()
  return <div className='mx-32'>
    <Typography text="Profil rasmini tahrirlash" size='sm' />
    <ProfileImage image={`${url}/files/image/${image}`} size={200} />
  </div>
}
function SettingsLayout() {
  const { data, isFetching } = useGetControllerInfoQuery();

  return (
    <>
      <Typography text="Sozlamalar" />
      {isFetching ? (
        <LoadingPage />
      ) : (
        <div className='flex'>
          <div className='max-w-[500px]'>
          <VendorSettingsLeft data={data} />
          <VendorPasswordChangeSetting />
          </div>
            <VendorProfileImageSetting image={data?.vendor.image} />
          </div>
      )}
    </>
  );
}
export default SettingsLayout