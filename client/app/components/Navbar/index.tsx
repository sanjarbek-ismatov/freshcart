"use client";
import Image from "next/image";
import LogoImage from "public/images/logo/freshcart-logo.svg";
import { forwardRef, useCallback, useState } from "react";
import "./Navbar.css";
import { SearchInput } from "..";
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";

const Navbar = forwardRef<HTMLElement>(function Navbar(props, ref) {
  const auth = useAuth();
  const [show, setShow] = useState(false);
  const handleShow = useCallback(() => {
    if (auth) setShow(!show);
  }, [auth, show]);
  const logOut = useCallback(() => {
    localStorage.removeItem("x-token");
    window.location.reload();
  }, []);
  return (
    <>
      <div className="flex container max-w-[1300px] mx-auto md:justify-center justify-between py-5 items-center">
        <div className="sm:w-56 w-40 mr-12">
          <Image src={LogoImage} alt="Logo image" />
        </div>
        <div className="w-full md:block hidden">
          <SearchInput placeholder="Maxsulot nomini yozing" />
          <button className="mx-4 border border-slate-300 py-2 px-5 text-slate-500 rounded-md bg-slate-200">
            <i className="cursor-pointer fa-solid fa-location-dot mr-2"></i>{" "}
            Hudud
          </button>
        </div>
        <div className="w-32 flex justify-between">
          <div>
            <span className="relative">
              <i className="cursor-pointer fa-regular fa-heart text-xl"></i>
              <span className="text-sm px-1 text-white rounded-full absolute top-[-10px] right-[-10px] bg-green-500">
                1
              </span>
            </span>
            <span className="relative mx-3">
              {
                <>
                  <i
                    ref={ref}
                    onClick={handleShow}
                    className="fa-regular cursor-pointer fa-user text-xl"
                  ></i>
                  {show && (
                    <ul className="absolute transition-all translate-y-2 right-3 ease-in duration-300  opacity-100 border text-slate-600 border-slate-300 p-3 w-20 rounded-md z-10 bg-white">
                      <li className="py-1">
                        <Link href="/">Hisob</Link>
                      </li>
                      <li className="py-1">
                        <Link href="/">Yordam</Link>
                      </li>
                      <li className="py-1 text-red-500">
                        <button onClick={logOut}>chiqish</button>
                      </li>
                    </ul>
                  )}
                </>
              }
            </span>
            <Link href="/account/wishlist" className="relative">
              <i className="cursor-pointer fa-regular fa-bookmark text-xl"></i>
              <span className="text-sm px-1 text-white rounded-full absolute top-[-10px] right-[-10px] bg-green-500">
                1
              </span>
            </Link>
          </div>
          <div className="md:hidden block mx-3">
            <span>
              <i className="fa-solid fa-bars text-lg"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
});
export default Navbar;
