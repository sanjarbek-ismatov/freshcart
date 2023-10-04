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
import { Badge, OffCanvas } from "@components";
import { useUserContext } from "@/app/context";

const Navbar: FC<{ setShowModal: Dispatch<SetStateAction<boolean>> }> =
  function ({ setShowModal }) {
    const auth = useAuth();
    const vendorAuth = useAuth("vendor");
    const { data, isLoading, refetch } = useUserContext();
    const [showMenu, setShowMenu] = useState(false);

    const [show, setShow] = useState(false);
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
        <div className="flex container w-full mx-auto lg:justify-center justify-between py-5 items-center">
          <div className="sm:w-56 w-40">
            <Link href="/">
              {" "}
              <Image src={LogoImage} alt="Logo image" />
            </Link>
          </div>
          <div className="flex-1 lg:block hidden">
            <div>
              <SearchInput placeholder="Maxsulot nomini yozing" />
            </div>
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
                            <li className="py-1 text-red-500">
                              <button onClick={logOut}>chiqish</button>
                            </li>
                          </ul>
                        )}
                      </>
                    }
                  </span>
                  <Badge length={data?.user.cart.length}>
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
          refetch={refetch}
          show={showOffCanvas}
          setShow={setOffCanvas}
        />
        <SidePanel show={showMenu} setShow={setShowMenu} />
      </>
    );
  };
export default Navbar;
