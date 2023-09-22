"use client";
import Image from "next/image";
import LogoImage from "public/images/logo/freshcart-logo.svg";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import "./Navbar.css";
import { SearchInput, SidePanel } from "..";
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { Badge, LocationList, OffCanvas } from "@components";
import { useUserContext } from "@/app/context";
import { useRouter, useSearchParams } from "next/navigation";

const Navbar: FC<{ setShowModal: Dispatch<SetStateAction<boolean>> }> =
  function ({ setShowModal }) {
    const auth = useAuth();
    const vendorAuth = useAuth("vendor");
    const { data, isLoading } = useUserContext();
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const searchParams = useSearchParams();
    const [show, setShow] = useState(false);
    const [locationShow, setLocationShow] = useState(false);
    const [showOffCanvas, setOffCanvas] = useState(false);
    const handleShow = useCallback(() => {
      if (auth) setShow(!show);
      else setShowModal(true);
    }, [auth, setShowModal, show]);
    const handleShowOffCanvas = useCallback(() => {
      setOffCanvas(!showOffCanvas);
    }, [showOffCanvas]);
    const logOut = useCallback(() => {
      localStorage.removeItem("x-token");
      window.location.reload();
    }, []);
    return (
      <>
        {locationShow && <LocationList setShow={setLocationShow} />}
        <div className="flex container  mx-auto lg:justify-center justify-between py-5 items-center">
          <div className="sm:w-56 w-40 mr-12">
            <Link href="/">
              {" "}
              <Image src={LogoImage} alt="Logo image" />
            </Link>
          </div>
          <div className="flex-1 lg:block hidden">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget
                  .firstElementChild as HTMLInputElement;
                const params = new URLSearchParams(searchParams as any);
                params.set("name", input.value);
                router.push(`/products?${params.toString()}`);
                input.value = "";
              }}
            >
              <SearchInput placeholder="Maxsulot nomini yozing" />
              <button
                type="button"
                onClick={() => setLocationShow(true)}
                className="mx-4 border border-slate-300 py-2 px-5 text-slate-500 rounded-md bg-slate-200"
              >
                <i className="cursor-pointer fa-solid fa-location-dot mr-2"></i>{" "}
                Hudud
              </button>
            </form>
          </div>
          <div className="min-w-32 flex justify-between">
            {!isLoading &&
              (vendorAuth ? (
                <Link href="/dashboard">
                  <p className="text-slate-700 p-3 border">
                    <i className="fa-solid fa-house-user"></i> Boshqaruv paneli
                  </p>
                </Link>
              ) : (
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
                          onClick={handleShow}
                          className="fa-regular cursor-pointer fa-user text-xl"
                        ></i>
                        {show && (
                          <ul className="absolute transition-all translate-y-2 right-3 ease-in duration-300  opacity-100 border text-slate-600 border-slate-300 p-3 w-20 rounded-md z-10 bg-white">
                            <li className="py-1">
                              <Link href="/account/personal">Hisob</Link>
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
                  <Badge length={1}>
                    <i
                      className="cursor-pointer fa-regular fa-bookmark text-xl"
                      onClick={handleShowOffCanvas}
                    ></i>
                  </Badge>
                </div>
              ))}
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden block mx-3"
            >
              <span>
                <i className="fa-solid fa-bars text-lg"></i>
              </span>
            </div>
          </div>
        </div>
        <OffCanvas
          cart={data?.user.cart}
          show={showOffCanvas}
          setShow={setOffCanvas}
        />
        <SidePanel show={showMenu} setShow={setShowMenu} />
      </>
    );
  };
export default Navbar;
