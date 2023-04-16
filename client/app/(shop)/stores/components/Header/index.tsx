import Image from "next/image";
import StoreImage from "public/images/svg-graphics/store-graphics.svg";
import "./Header.css";
function Header() {
  return (
    <div>
      <h1>Do`konlar</h1>
      <Image src={StoreImage} alt={""} />
    </div>
  );
}
export default Header;
