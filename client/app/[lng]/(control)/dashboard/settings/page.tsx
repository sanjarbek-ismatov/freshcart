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
import { useParsedUrlData } from "@/app/hooks/useParsedUrlData";

function VendorSettingsLeft({ data }: { data?: VendorWithOrders }) {
  const [editable, setEditable] = useState(false);

  return (
    <form>
      <VendorProfileImageSetting
        image={data?.vendor.image}
        editable={editable}
      />
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
      <Button
        onClick={() => setEditable(!editable)}
        type="button"
        bgColor="bg-gray-300"
        color="text-slate-600"
      >
        {editable ? "Bekor qilish" : "O'zgartirish"}
      </Button>
      <Button type="submit" disabled={!editable}>
        Saqlash
      </Button>
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
function VendorProfileImageSetting({image, editable}: {image?: string; editable?: boolean}){
  const url = useUrlContext()
  const [handleChangeImage, images] = useParsedUrlData(`${url}/files/image/${image}`)
  return <div>
    <Typography text="Profil rasmini tahrirlash" size='sm' />
    <label>
    <ProfileImage image={images[0]} size={200} editable={editable}  />
    <input type="file" name='image' onChange={handleChangeImage} hidden disabled={!editable} />
    </label>
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

          </div>
      )}
    </>
  );
}
export default SettingsLayout