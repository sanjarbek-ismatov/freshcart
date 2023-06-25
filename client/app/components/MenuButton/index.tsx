"use client";
import { forwardRef, ReactNode, useState } from "react";

const MenuButton = forwardRef<
  HTMLElement,
  {
    isThereOwnIcon?: boolean;
    children: ReactNode;
  }
>(function MenuButton({ isThereOwnIcon = false, children }, ref) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative m-auto">
      {!isThereOwnIcon ? (
        <>
          <div className="w-full h-full"></div>
          <span className="absolute top-0 right-0 flex flex-row-reverse w-auto rounded  z-20 cursor-pointer">
            <i
              onClick={() => setShow(!show)}
              className="fa-solid px-3 fa-ellipsis-vertical"
            ></i>
          </span>
        </>
      ) : (
        <i ref={ref}></i>
      )}
      {show && <div className="border w-[200px]">{children}</div>}
    </div>
  );
});

// MenuButton.Child = function Child() {
//   return <p>I'm child</p>;
// };
export default MenuButton;
