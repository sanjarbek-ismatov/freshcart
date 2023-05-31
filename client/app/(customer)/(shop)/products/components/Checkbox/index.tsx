import { ComponentProps, ReactNode } from "react";
import "./Checkbox.css";

function Checkbox({
  checked,
  children,
  ...rest
}: {
  checked: boolean;
  children: ReactNode;
} & ComponentProps<"input">) {
  return (
    <>
      <label className="inline-flex items-center">
        <input {...rest} type="checkbox" className="h-0 w-0 " />
        <span
          className={`${
            checked ? "bg-green-500" : "bg-white border"
          } w-5 h-5 flex justify-center items-center rounded-sm mx-2`}
        >
          {checked && (
            <i className="fa-solid fa-check text-white text-sm m-[1px]"></i>
          )}
        </span>
        {children}
      </label>
    </>
  );
}

export default Checkbox;
