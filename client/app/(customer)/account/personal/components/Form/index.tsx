import "./Form.css";
import { UserType } from "@/types";
import { Button, Input } from "@components";
import { useUpdateUserInfoMutation } from "@/store/api/ecommerce";
import FormParser from "@/app/utils/formParser";

function Form({ user }: { user: UserType }) {
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const formTemp = new FormParser();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formTemp.setForm(e);
        updateUserInfo(formTemp.getFormAsFormData);
        console.log(formTemp.getFormAsObject);
      }}
    >
      <Input label="Rasm" name="image" type="file" fullWidth />
      <Input
        name="name"
        type="text"
        label="Ismingiz"
        placeholder="Ismingiz"
        fullWidth
        defaultValue={user.name}
      />
      <Input
        type="text"
        name="username"
        label="Foydalanuvchi nomi"
        placeholder="Foydalanuvchi nomi"
        fullWidth
        defaultValue={user.username}
      />
      <Input
        type="email"
        name="email"
        label="Pochtangiz"
        placeholder="Emailingiz"
        fullWidth
        defaultValue={user.email}
      />
      <Input
        type="tel"
        name="phone"
        label="Telefon raqamingiz"
        defaultValue={user.phone}
        fullWidth
      />
      <fieldset name="address">
        <legend>Joylashuvingiz</legend>
        <Input
          label="Viloyat"
          fullWidth
          type="text"
          name="state"
          defaultValue={user.address?.state}
        />
        <Input
          type="text"
          label="Joylashuv"
          fullWidth
          name="location"
          defaultValue={user.address?.location}
        />
        <Input
          type="text"
          label="Pochta indeksi"
          name="zipCode"
          defaultValue={user.address?.zipCode}
          fullWidth
        />
      </fieldset>
      <fieldset name="payment">
        <Input
          type="text"
          label="Karta raqami"
          name="cardNumber"
          pattern="/[\d{16}]/"
          defaultValue={user.payment?.cardNumber}
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
