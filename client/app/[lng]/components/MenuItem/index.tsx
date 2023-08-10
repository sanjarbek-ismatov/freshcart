import "./MenuItem.css";
import { ComponentProps, ReactNode } from "react";

function MenuItem({
  children,
  ...rest
}: {
  children: ReactNode;
} & ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className="p-2 hover:bg-gray-300 text-slate-800 rounded-md  z-20 bg-white"
    >
      {children}
    </div>
  );
}

export default MenuItem;
