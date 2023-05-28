import Image from "next/image";
import StoreImage from "@/public/images/svg-graphics/store-graphics.svg";
import "./Header.css";

function Header() {
  return (
    <div className="flex justify-between items-center p-5 bg-slate-100">
      <h1 className="text-4xl text-slate-700 font-bold">Do`konlar</h1>
      <Image src={StoreImage} alt={""} />
    </div>
  );
}

export default Header;
