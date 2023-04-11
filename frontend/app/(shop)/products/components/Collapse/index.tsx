import { useCallback, useState } from "react";
import "./Collapse.css";
import Link from "next/link";
function Collapse() {
  const [show, setShow] = useState(false);
  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show]);
  return (
    <>
      <div
        onClick={handleShow}
        className="w-full cursor-pointer hover:bg-gray-100 p-3 border-b flex items-center justify-between my-1"
      >
        <p className="text-sm">Oziq Ovqat</p>{" "}
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className={`${show ? "h-auto" : "h-0"} overflow-hidden`}>
        <ul>
          <li className="my-3 ml-5">
            <Link className="text-sm" href="/">
              Tuxum mahsulotlari
            </Link>
          </li>
          <li className="my-3 ml-5">
            <Link className="text-sm" href="/">
              Makaron
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Collapse;
