import Image from "next/image";
import LogoImage from "public/images/logo/freshcart-logo.svg";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="flex justify-center py-5 items-center">
        <div className="w-56 mr-12">
          <Image src={LogoImage} alt="Logo image" />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="w-8/12 outline-none px-3 py-2 border-slate-300 border rounded-sm"
            placeholder="Maxsulotlarni qidiring"
          />
          <button className="mx-4 border border-slate-300 py-2 px-5 text-slate-500 rounded-md bg-slate-200">
            <i className="fa-solid fa-location-dot mr-2"></i> Hudud
          </button>
        </div>
        <div className="w-32">
          <span className="relative">
            <i className="fa-regular fa-heart text-xl"></i>
            <span className="text-sm px-1 text-white rounded-full absolute top-[-10px] right-[-10px] bg-green-500">
              1
            </span>
          </span>
          <span className="relative mx-3">
            <i className="fa-regular fa-user text-xl"></i>
          </span>
          <span className="relative">
            <i className="fa-regular fa-bookmark text-xl"></i>
            <span className="text-sm px-1 text-white rounded-full absolute top-[-10px] right-[-10px] bg-green-500">
              1
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
export default Navbar;
