import "./Banner.css";
import { Button } from "@components";
import Link from "next/link";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/Jt5WBgM/slider-image-1.jpg)",
      }}
      className="h-60 rounded-md bg-cover bg-right bg-no-repeat my-5 px-20 flex leading-[35px] items-center"
    >
      <div>
        <h1 className="font-semibold text-3xl text-slate-800">
          Xush kelibsiz Freshcartga!
        </h1>
        <p>FreshCart dasturchi va dizayner uchun sodda va toza dizayndir.</p>
        <Link href="/dashboard/create">
          <Button>Maxsulot qo`shish</Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
