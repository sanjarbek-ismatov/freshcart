"use client";
import LogoImage from "@/public/images/logo/freshcart-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLink } from "@components";

function PanelNavigation({ label }: { label?: string }) {
  const pathname = usePathname();
  const lastPath = pathname.split("/").at(-1);

  return (
    <div className="group w-[100px] hover:w-[300px] leading-10 p-5 transition-all overflow-hidden">
      <Link href="/">
        <Image src={LogoImage} alt="logo" />
      </Link>
      <PanelLink
        lastPath={lastPath}
        href="/dashboard"
        icon="fa-solid fa-house fa-bounce"
        title="Bosh sahifa"
      />
      <ul>
        <PanelLink
          title="Maxsulotlar"
          icon="fa-solid fa-cart-shopping mx-1"
          lastPath={lastPath}
          href="/dashboard/products"
        />
        <PanelLink
          href="/dashboard/orders"
          title="Buyurtmalar"
          lastPath="orders"
          icon="fa-solid fa-bag-shopping mx-1"
        />
        <PanelLink
          href="/dashboard/reviews"
          title="Izohlar"
          icon="fa-regular fa-star mx-1"
          lastPath="reviews"
        />
        <PanelLink
          href="/dashboard/discounts"
          title="Chegirmalar"
          icon="fa-solid fa-tag mx-1"
          lastPath="discounts"
        />
        <PanelLink
          href="/dashboard/settings"
          title="Sozlamalar"
          icon="fa-solid fa-gear mx-1"
          lastPath="settings"
        />
      </ul>
    </div>
  );
}

export default PanelNavigation;
