import { Badge } from "@components";
import Image from "next/image";
import { VendorType } from "@types";

function Navbar({ vendor }: { vendor?: VendorType }) {
  return (
    <header className="flex justify-between h-16 w-full items-center">
      <p>Some component</p>
      <nav className="flex items-center">
        <Badge length={1}>
          <i className="fa-solid fa-bell text-xl"></i>
        </Badge>
        <Image
          className="w-12 h-12 rounded-full ml-5"
          src={`http://localhost:4000/api/files/image/${vendor?.image}`}
          height={50}
          width={50}
          alt="Profile"
          unoptimized
        />
      </nav>
    </header>
  );
}

export default Navbar;
