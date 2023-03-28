import Link from "next/link";
import "./Menu.css";
function Menu() {
  return (
    <>
      <div className="flex items-center">
        <div className="relative group ">
          <button className="py-3 px-4 bg-green-500 rounded-md text-white">
            Barchasi
          </button>
          <ul className="absolute transition-all translate-y-2 ease-in duration-300 group-hover:opacity-100 group-hover:translate-y-[0px] opacity-0 border text-slate-600 border-slate-300 p-3 w-36 rounded-md">
            <li className="py-1">
              <Link href="/">Maishiy texnika</Link>
            </li>
            <li className="py-1">
              <Link href="/">Sport anjomlari</Link>
            </li>
            <li className="py-1">
              <Link href="/">Oziq-ovqat</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="mx-3 text-slate-600 font-medium">
          Uy
        </Link>
        <Link href="/" className="mx-3 text-slate-600 font-medium">
          Maxsulotlar
        </Link>
        <Link href="/" className="mx-3 text-slate-600 font-medium">
          Do`konlar
        </Link>
      </div>
    </>
  );
}
export default Menu;
