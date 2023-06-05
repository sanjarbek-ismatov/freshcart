"use client";
import { ReactNode, useState } from "react";

function MenuButton({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <span
      onClick={() => setShow(!show)}
      className="relative p-3 w-auto rounded hover:bg-gray-300  z-20 cursor-pointer"
    >
      <i className="fa-solid  fa-ellipsis-vertical"></i>
      {show && (
        <div className="absolute border top-0 left-[-170px] ">{children}</div>
      )}
    </span>
  );
}

// MenuButton.Child = function Child() {
//   return <p>I'm child</p>;
// };
export default MenuButton;
