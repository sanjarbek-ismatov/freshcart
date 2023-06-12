import "./Form.css";
import { User } from "@/types";
import { Button, Input } from "@components";
import FormParser from "@/app/utils/formParser";
import { useUpdateUserInfoMutation } from "@/store/api/ecommerce";

function Form({ user }: { user: User }) {
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const form = new FormParser(updateUserInfo);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.setForm(e);
        // form.sendForm();
      }}
    >
      <Input name="image" type="file" />
      <Input
        name="name"
        type="text"
        placeholder="Ismingiz"
        defaultValue={user.name}
      />
      <Input
        type="text"
        name="username"
        placeholder="Foydalanuvchi nomi"
        defaultValue={user.username}
      />
      <Input
        type="email"
        name="email"
        placeholder="Emailingiz"
        defaultValue={user.email}
      />
      <Input type="tel" name="phone" defaultValue={user.phone} />
      <fieldset name="address">
        <legend>Joylashuvingiz</legend>
        <Input type="text" name="state" defaultValue={user.address.state} />
        <Input
          type="text"
          name="location"
          defaultValue={user.address.location}
        />
        <Input type="text" name="zipCode" defaultValue={user.address.zipCode} />
      </fieldset>

      <Input type="password" name="password" placeholder="Yangi parol" />
      <Button type="submit">Yangilash</Button>
    </form>
  );
}

export default Form;
