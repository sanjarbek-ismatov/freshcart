"use client";
import {
    Button,
    Input, LoadingModal,
    LoadingPage,
    ProfileImage,
    Typography,
} from "@components";
import {useGetControllerInfoQuery, useUpdateVendorInfoMutation, useUpdateVendorPasswordMutation} from "@store/api";
import {useCallback, useState} from "react";
import { VendorWithOrders } from "@types";
import { useUrlContext } from "@/app/context";
import { useParsedUrlData } from "@/app/hooks/useParsedUrlData";
import FormParser from "@/app/utils/formParser";

function SubmitButtons({
  handleClick,
  editable,
}: {
  handleClick: () => void;
  editable: boolean;
}) {
  return (
    <>
      <Button
        onClick={handleClick}
        type="button"
        bgColor="bg-gray-300"
        color="text-slate-600"
      >
        {editable ? "Bekor qilish" : "O'zgartirish"}
      </Button>
      <Button type="submit" disabled={!editable}>
        Saqlash
      </Button>
    </>
  );
}

function VendorSettingsLeft({ data }: { data?: VendorWithOrders }) {
  const [editable, setEditable] = useState(false);
const [updateInfo, {isLoading}] = useUpdateVendorInfoMutation()
    const formParser = new FormParser()
  return (
      <>
      {isLoading && <LoadingModal />}
    <form onSubmit={event => {
        event.preventDefault()
        formParser.setForm(event)
        updateInfo(formParser.getFormAsFormData)
    }
    }>

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
      <SubmitButtons
        handleClick={() => setEditable(!editable)}
        editable={editable}
      />
    </form>
      </>
  );
}
function VendorPasswordChangeSetting(){
  const [editable, setEditable] = useState(false)
  const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [isError, setIsError] = useState(false)
    const [updatePassword, {isLoading}] = useUpdateVendorPasswordMutation()
    const submitPassword = useCallback(() => {
       !isError && updatePassword({
            newPassword,
            password
        })
    }, [password, newPassword])
    return <>
        {isLoading && <LoadingModal />}
    <Typography
      text="Parolni o'zgartirish"
      color="text-red-500"
      size="sm"
  />
  <form onSubmit={(event) => {
      event.preventDefault()
      submitPassword()
  }
  }>
    <Input onChange={(e) => setPassword(e.target.value)} label="Joriy parolni kiriting" type="password" disabled={!editable} />
    <Input
        label="Yangi parolni kiriting"
        type="password"
        name="password"
        onChange={e => setNewPassword(e.target.value)}
        disabled={!editable}
    />
    <Input
        isError={isError}
        label="Parolni qayta kiriting"
        onChange={e => {
          setIsError(e.target.value !== newPassword)
        }}
        type="password"
        disabled={!editable}
    />
    <SubmitButtons handleClick={() => setEditable(!editable)} editable={editable} />
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