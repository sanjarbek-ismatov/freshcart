import "./MenuItem.css";
import { ReactNode } from "react";

function MenuItem({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 hover:bg-gray-300 text-slate-800 rounded-md  z-20 bg-white">
      {children}
    </div>
  );
}

export default MenuItem;
