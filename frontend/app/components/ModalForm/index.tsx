import { Button } from "..";
import Input from "../Input";
import "./ModalForm.css";
function ModalForm() {
  return (
    <>
      <div className="w-full py-1">
        <label className="text-sm text-slate-800" htmlFor="name">
          Ism
        </label>
        <br />

        <Input id="name" type="text" name="name" placeholder="Ismingiz" />
      </div>
      <div className="w-full py-1">
        <label className="text-sm text-slate-800" htmlFor="username">
          Foydalanuvchi ismi
        </label>
        <br />
        <Input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div className="w-full py-1">
        <label className="text-sm text-slate-800" htmlFor="phone">
          Telefon raqam
        </label>
        <br />
        <Input id="phone" type="text" name="phone" placeholder="Raqamingiz" />
      </div>
      <div className="w-full py-1">
        <label className="text-sm text-slate-800" htmlFor="email">
          Pochta
        </label>
        <br />
        <Input id="email" type="email" name="email" placeholder="Pochta" />
      </div>
      <div className="w-full py-1">
        <label className="text-sm text-slate-800" htmlFor="password">
          Parol
        </label>
        <br />
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Parol"
        />
      </div>
      <div className="w-full py-4 text-center">
        <Button>Hisob yaratish</Button>
      </div>
    </>
  );
}
export default ModalForm;
