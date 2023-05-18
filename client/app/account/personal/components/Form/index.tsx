import "./Form.css";
import { User } from "@/types";
import { Button, Input } from "@/app/components";

function Form({ user }: { user: User }) {
  return (
    <form>
      <Input type="file" />
      <Input type="text" placeholder="Ismingiz" defaultValue={user.name} />
      <Input
        type="text"
        placeholder="Foydalanuvchi nomi"
        defaultValue={user.username}
      />
      <Input type="email" placeholder="Emailingiz" defaultValue={user.email} />
      <Input type="tel" defaultValue={user.phone} />
      <Input type="text" defaultValue={user.city} />
      <Input type="password" placeholder="Yangi parol" />
      <Input type="password" placeholder="Asl parolni kiriting" />
      <Button>Yangilash</Button>
    </form>
  );
}

export default Form;
