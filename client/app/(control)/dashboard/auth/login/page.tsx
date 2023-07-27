"use client";
import { Button, Input } from "@components";
import { useVendorLoginMutation } from "@/store/api/ecommerce";
import FormParser from "@/app/utils/formParser";

function LoginPage() {
  const [login] = useVendorLoginMutation();
  const formParser = new FormParser<{ email: string; password: string }>();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formParser.setForm(e);
        login(formParser.getFormAsObject as any).then((data) => {
          if (!("error" in data)) {
            localStorage.setItem("x-vendor-token", data.data.token as any);
          }
        });
      }}
    >
      <Input name="email" type="email" placeholder="Rasmiy pochta" />
      <Input name="password" type="password" placeholder="Maxfiy parol" />
      <Button type="submit">Kirish</Button>
    </form>
  );
}

export default LoginPage;
