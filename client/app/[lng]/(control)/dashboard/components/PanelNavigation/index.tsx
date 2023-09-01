"use client";
import LogoImage from "@/public/images/logo/freshcart-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function PanelNavigation() {
  const pathname = usePathname();
  const lastPath = pathname.split("/").at(-1);

  return (
    <div className="group w-[100px] hover:w-[300px] leading-10 p-5 transition-all overflow-hidden">
      <Link href="/">
        <Image src={LogoImage} alt="logo" />
      </Link>
      <Link
        className={`py-2 px-3 text-gray-500 w-[300px] block my-4 ${
          lastPath === "dashboard" && "bg-green-200 text-green-600"
        }`}
        href="/dashboard"
      >
        <i className="fa-solid fa-house fa-bounce"></i>{" "}
        <span className="opacity-0 break-normal group-hover:opacity-100">
          Bosh sahifa
        </span>
      </Link>
      <p className="opacity-0 text-gray-500 group-hover:opacity-100 w-[300px]">
        Do`kon boshqaruvi
      </p>
      <ul>
        <li className="my-3 w-[300px]">
          <Link
            className={`p-3 block text-gray-500 ${
              lastPath === "products" && "bg-green-200 text-green-600"
            }`}
            href="/dashboard/products"
          >
            <i className="fa-solid fa-cart-shopping mx-1"></i>
            <span className="opacity-0 break-normal group-hover:opacity-100">
              Maxsulotlar
            </span>
          </Link>
        </li>
        <li className="my-3 w-[300px]">
          <Link
            className={`p-3 block text-gray-500 ${
              lastPath === "orders" && "bg-green-200 text-green-600"
            }`}
            href="/dashboard/orders"
          >
            <i className="fa-solid fa-bag-shopping mx-1"></i>
            <span className="opacity-0 break-normal group-hover:opacity-100">
              Xaridlar
            </span>
          </Link>
        </li>

        <li className="my-3 w-[300px]">
          <Link
            className={`p-3 block text-gray-500 ${
              lastPath === "reviews" && "bg-green-200 text-green-600"
            }`}
            href="/dashboard/reviews"
          >
            <i className="fa-regular fa-star mx-1"></i>
            <span className="opacity-0 break-normal group-hover:opacity-100">
              Izohlar
            </span>
          </Link>
        </li>
        <li className="my-3 w-[300px]">
          <Link
            className={`p-3 block text-gray-500 ${
              lastPath === "discounts" && "bg-green-200 text-green-600"
            }`}
            href="/dashboard/discounts"
          >
            <i className="fa-solid fa-tag mx-1"></i>
            <span className="opacity-0 break-normal group-hover:opacity-100">
              Chegirmalar
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PanelNavigation;
