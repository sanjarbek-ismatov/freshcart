import "./Header.css";
import { User } from "@/types";
import Image from "next/image";

function Header({ user }: { user: User }) {
  return (
    <div>
      <Image
        width={200}
        height={200}
        className="rounded-full"
        src={
          user.image
            ? `http://localhost:4000/api/files/image/${user.image}`
            : "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        }
        alt="Profil rasmi"
        unoptimized
      />
      <h1>{user.name}</h1>
      <h4>{user.email}</h4>
    </div>
  );
}

export default Header;
