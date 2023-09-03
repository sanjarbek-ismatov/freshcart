import React from "react";
import { UserType } from "@types";
import { Button, Input, ProfileImage } from "@components";
import { useUpdateUserInfoMutation } from "@store/api";
import FormParser from "@/app/utils/formParser";
import { useParsedUrlData } from "@/app/hooks/useParsedUrlData";
import { useUrlContext } from "@/app/context";

function Form({ user }: { user?: UserType }) {
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const url = useUrlContext();
  const form = new FormParser();
  const [handleSubmitImage, images] = useParsedUrlData(
    user?.image ? `${url}/files/image/${user.image}` : ""
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.setForm(e);
        updateUserInfo(form.getFormAsFormData);
      }}
    >
      <label>
        <ProfileImage editable={true} size={200} image={images[0]} />
        <input onChange={handleSubmitImage} name="image" type="file" hidden />
      </label>
      <Input
        name="name"
        type="text"
        label="Ismingiz"
        placeholder="Ismingiz"
        fullWidth
        defaultValue={user?.name}
      />
      <Input
        type="text"
        name="username"
        label="Foydalanuvchi nomi"
        placeholder="Foydalanuvchi nomi"
        fullWidth
        defaultValue={user?.username}
      />
      <Input
        type="email"
        name="email"
        label="Pochtangiz"
        placeholder="Emailingiz"
        fullWidth
        defaultValue={user?.email}
      />
      <Input
        type="tel"
        name="phone"
        label="Telefon raqamingiz"
        defaultValue={user?.phone}
        fullWidth
      />
      <fieldset name="address">
        <legend>Joylashuvingiz</legend>
        <Input
          label="Viloyat"
          fullWidth
          type="text"
          name="state"
          defaultValue={user?.address?.state}
        />
        <Input
          type="text"
          label="Joylashuv"
          fullWidth
          name="location"
          defaultValue={user?.address?.location}
        />
        <Input
          type="text"
          label="Pochta indeksi"
          name="zipCode"
          defaultValue={user?.address?.zipCode}
          fullWidth
        />
      </fieldset>
      <fieldset name="payment">
        <Input
          type="text"
          label="Karta raqami"
          name="cardNumber"
          pattern="/[\d{16}]/"
          defaultValue={user?.payment?.cardNumber}
          required
          fullWidth
        />
      </fieldset>
      <Input
        type="password"
        label="Parol"
        name="password"
        placeholder="Yangi parol"
        fullWidth
      />
      <Button type="submit">Yangilash</Button>
    </form>
  );
}

export default Form;
