import "./PanelNavigation.css";
import LogoImage from "public/images/logo/freshcart-logo.svg";
import Image from "next/image";
import Link from "next/link";

function PanelNavigation() {
  return (
    <div className="w-[400px] leading-10 p-5">
      <Image src={LogoImage} alt="logo" />
      <Link
        className="py-2 px-3 text-green-600 block my-4 bg-green-200"
        href="/dashboard/vendor"
      >
        <i className="fa-solid fa-house fa-bounce"></i> Bosh sahifa
      </Link>
      <p className="text-sm text-gray-500">Do`kon boshqaruvi</p>
      <ul>
        <li className="my-3">
          <Link className="p-3 text-gray-500" href="/">
            <i className="fa-solid fa-cart-shopping mx-1"></i>Maxsulotlar
          </Link>
        </li>
        <li className="my-3">
          <Link className="p-3 text-gray-500" href="/">
            <i className="fa-solid fa-bag-shopping mx-1"></i>Xaridlar
          </Link>
        </li>

        <li className="my-3">
          <Link className="p-3 text-gray-500" href="/">
            <i className="fa-regular fa-star mx-1"></i>Izohlar
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PanelNavigation;
