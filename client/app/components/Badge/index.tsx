import "./Badge.css";
import { ReactNode } from "react";

function Badge({ length, children }: { length: number; children: ReactNode }) {
  return (
    <span className="relative">
      {children}
      <span className="text-sm px-1 text-white rounded-full absolute top-[-10px] right-[-10px] bg-green-500">
        {length}
      </span>
    </span>
  );
}

export default Badge;
