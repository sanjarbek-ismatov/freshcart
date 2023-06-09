import "./Navbar.css";
import { Badge } from "@/app/components";
import Image from "next/image";
import ProfileImage from "@/public/images/avatar/avatar-1.jpg";

function Navbar() {
  return (
    <header className="flex justify-between h-16 w-full items-center">
      <p>Some component</p>
      <nav className="flex items-center">
        <Badge length={1}>
          <i className="fa-solid fa-bell text-xl"></i>
        </Badge>
        <Image
          className="w-12 h-12 rounded-full ml-5"
          src={ProfileImage}
          alt="Profile"
        />
      </nav>
    </header>
  );
}

export default Navbar;
