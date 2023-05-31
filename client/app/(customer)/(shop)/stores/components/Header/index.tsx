import Image from "next/image";
import StoreImage from "@/public/images/svg-graphics/store-graphics.svg";
import "./Header.css";

function Header({ title, image }: { title?: string; image?: string }) {
  return (
    <div className="flex justify-between items-center p-5 bg-slate-100">
      <h1 className="text-4xl text-slate-700 font-bold">
        {title || "Do`konlar"}
      </h1>
      {image ? (
        <Image
          src={`http://localhost:4000/api/files/image/${image}`}
          alt="Do'kon"
          width={100}
          height={100}
          unoptimized
        />
      ) : (
        <Image src={StoreImage} alt={""} />
      )}
    </div>
  );
}

export default Header;
