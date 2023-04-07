import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";
function Button({
  children,
  full,
  ...rest
}: {
  children: ReactNode;
  full?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`${
        full && "w-full"
      } px-4 py-2 bg-green-500 border-4 active:border-green-300 text-white rounded-md inline`}
    >
      {children}
    </button>
  );
}

export default Button;
