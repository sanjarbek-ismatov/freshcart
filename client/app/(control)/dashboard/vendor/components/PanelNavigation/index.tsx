import "./PanelNavigation.css";
import LogoImage from "public/images/logo/freshcart-logo.svg";
import Image from "next/image";
import Link from "next/link";

function PanelNavigation() {
  return (
    <div className="w-[400px]">
      <Image src={LogoImage} alt="logo" />
      <Link href="/dashboard/vendor">
        <i className="fa-solid fa-house fa-bounce"></i> Bosh sahifa
      </Link>
      <p>Do`kon boshqaruvi</p>
      <ul>
        <li>
          <Link href="/">
            <i className="fa-solid fa-cart-shopping"></i>Maxsulotlar
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fa-solid fa-bag-shopping"></i>Xaridlar
          </Link>
        </li>

        <li>
          <Link href="/">
            <i className="fa-regular fa-star"></i>Izohlar
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PanelNavigation;
