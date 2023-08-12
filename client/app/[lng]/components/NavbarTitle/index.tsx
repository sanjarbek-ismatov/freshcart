"use client";
import { useState } from "react";
import Link from "next/link";
import { getTranslation } from "@internalization";
import { usePathname } from "next/navigation";

function NavbarTitle() {
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  const t = getTranslation(pathname.split("/")[1]);
  return (
    <div
      className={`${!show && "hidden"} relative bg-yellow-300 p-3 text-center`}
    >
      <p className="text-slate-900 inline">
        {t["welcome-to-vendor"]}
        <Link href="/dashboard/auth" className="text-blue-600">
          {t["join-to-vendor"]}
        </Link>
      </p>
      <i
        onClick={() => setShow(!show)}
        className="fa-solid fa-x ml-3 cursor-pointer"
      ></i>
    </div>
  );
}

export default NavbarTitle;
