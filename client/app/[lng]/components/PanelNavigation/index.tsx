"use client";
import LogoImage from "@/public/images/logo/freshcart-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { PanelLink } from "@components";

function PanelNavigation({ label }: { label?: string }) {
  return (
    <div className="group w-[70px] hover:w-[300px] leading-10 p-5 transition-all overflow-hidden">
      <Link href="/">
        <Image src={LogoImage} alt="logo" />
      </Link>
      <PanelLink
        actualPath="dashboard"
        href="/dashboard"
        icon="fa-solid fa-house fa-bounce mx-1"
        title="Bosh sahifa"
      />
      <ul>
        <PanelLink
          title="Maxsulotlar"
          icon="fa-solid fa-cart-shopping mx-1"
          actualPath="products"
          href="/dashboard/products"
        />
        <PanelLink
          href="/dashboard/orders"
          title="Buyurtmalar"
          actualPath="orders"
          icon="fa-solid fa-bag-shopping mx-1"
        />
        <PanelLink
          href="/dashboard/reviews"
          title="Izohlar"
          icon="fa-regular fa-star mx-1"
          actualPath="reviews"
        />
        <PanelLink
          href="/dashboard/discounts"
          title="Chegirmalar"
          icon="fa-solid fa-tag mx-1"
          actualPath="discounts"
        />
        <PanelLink
          href="/dashboard/settings"
          title="Sozlamalar"
          icon="fa-solid fa-gear mx-1"
          actualPath="settings"
        />
      </ul>
    </div>
  );
}

export default PanelNavigation;
