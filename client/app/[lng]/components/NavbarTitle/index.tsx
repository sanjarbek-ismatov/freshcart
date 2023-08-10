"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";

function NavbarTitle() {
  const { t } = useTranslation("uz");
  const [show, setShow] = useState(true);
  return (
    <div
      className={`${!show && "hidden"} relative bg-yellow-300 p-3 text-center`}
    >
      <p className="text-slate-900 inline">
        {t("welcome-to-vendor")}
        <Link href="/dashboard/auth" className="text-blue-600">
          Qo'shilish
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
