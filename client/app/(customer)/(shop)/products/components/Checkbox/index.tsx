import { ComponentProps, ReactNode } from "react";

function Checkbox({
  checked,
  children,
  ...rest
}: {
  checked: boolean;
  children?: ReactNode;
} & ComponentProps<"input">) {
  return (
    <>
      <label className="inline-flex items-center">
        <input {...rest} type="checkbox" className="h-0 w-0 " />
        <span
          className={`${
            checked ? "bg-green-500" : "bg-white border border-gray-300"
          } w-4 h-4 flex justify-center items-center rounded-sm mx-2`}
        >
          {checked && (
            <i className="fa-solid fa-check text-white text-[10px] m-[1px]"></i>
          )}
        </span>
        {children}
      </label>
    </>
  );
}

export default Checkbox;
