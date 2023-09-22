import "./Badge.css";
import { ComponentProps, ReactNode } from "react";

function Badge({
  length,
  children,
  ...rest
}: { length?: number; children: ReactNode } & ComponentProps<"span">) {
  return (
    <span {...rest} className="relative">
      {children}
      {length && (
        <span className="text-sm px-1 text-white rounded-full absolute top-[-10px] right-[-10px] bg-green-500">
          {length}
        </span>
      )}
    </span>
  );
}

export default Badge;
