"use client";
import { ReactNode, useState } from "react";

function MenuButton({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative m-auto w-5 h-5">
      <div className="w-full h-full"></div>
      <span className="absolute top-0 right-0 flex flex-row-reverse w-auto rounded hover:bg-gray-300  z-20 cursor-pointer">
        <i
          onClick={() => setShow(!show)}
          className="fa-solid  fa-ellipsis-vertical"
        ></i>
        {show && <div className="border w-[200px]">{children}</div>}
      </span>
    </div>
  );
}

// MenuButton.Child = function Child() {
//   return <p>I'm child</p>;
// };
export default MenuButton;
