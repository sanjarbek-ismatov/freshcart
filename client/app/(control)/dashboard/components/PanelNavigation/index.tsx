"use client";
import LogoImage from "@/public/images/logo/freshcart-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function PanelNavigation({ params }: { params: string }) {
  const pathname = usePathname();
  const lastPath = pathname.split("/").at(-1);

  return (
    <div className="w-[400px] leading-10 p-5">
      <Image src={LogoImage} alt="logo" />
      <Link
        className={`py-2 px-3 text-gray-500  block my-4 ${
          lastPath === "dashboard" && "bg-green-200 text-green-600"
        }`}
        href="/dashboard"
      >
        <i className="fa-solid fa-house fa-bounce"></i> Bosh sahifa
      </Link>
      <p className="text-sm text-gray-500">Do`kon boshqaruvi</p>
      <ul>
        <li className="my-3">
          <Link
            className={`p-3 block text-gray-500 ${
              lastPath === "products" && "bg-green-200 text-green-600"
            }`}
            href="/dashboard/products"
          >
            <i className="fa-solid fa-cart-shopping mx-1"></i>Maxsulotlar
          </Link>
        </li>
        <li className="my-3">
          <Link
            className={`p-3 block text-gray-500 ${
              lastPath === "orders" && "bg-green-200 text-green-600"
            }`}
            href="/"
          >
            <i className="fa-solid fa-bag-shopping mx-1"></i>Xaridlar
          </Link>
        </li>

        <li className="my-3">
          <Link
            className={`p-3 block text-gray-500 ${
              lastPath === "reviews" && "bg-green-200 text-green-600"
            }`}
            href="/"
          >
            <i className="fa-regular fa-star mx-1"></i>Izohlar
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PanelNavigation;
