"use client";
import { Button, Input, LoadingModal, Typography } from "@components";
import FormParser from "@/app/utils/formParser";
import { useVendorLoginMutation } from "@/store/api/ecommerce";
import { useRouter } from "next/navigation";

function AuthComponent() {
  const formParser = new FormParser();
  const [login, { isLoading }] = useVendorLoginMutation();
  const router = useRouter();
  return (
    <>
      {isLoading && <LoadingModal />}
      <div className="w-full h-screen flex justify-center items-center bg-gray-50">
        <div className="max-w-[600px] p-24 rounded-lg text-center shadow-xl">
          <div>
            <Typography text="O'z do'koningizni yurgizing" />
            <Typography text="Jamoamizga qo'shiling" size="md" />
          </div>
          <div className="my-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                formParser.setForm(e);
                login(formParser.getFormAsObject as any).then((data) => {
                  if (!("error" in data)) {
                    localStorage.setItem(
                      "x-vendor-token",
                      data.data.token as any,
                    );
                    router.replace("/dashboard");
                  }
                });
              }}
            >
              <Input name="email" type="email" placeholder="Rasmiy pochta" />
              <Input
                name="password"
                type="password"
                placeholder="Maxfiy parol"
              />
              <div className="text-center">
                <Button type="submit">Kirish</Button>
              </div>
            </form>
            <p>Yoki</p>
            <Button>Ro'yxatdan o'tish</Button>
            <br />
            <a
              className="text-green-500 text-sm hover:underline"
              href="https://t.me/Sanjarbek_Ismatov"
              target="_blank"
            >
              Savollaringiz bormi?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthComponent;
