import "./Select.css";
import React, { ComponentProps, ReactNode } from "react";

function Select({
  onChange,
  defaultValue,
  fullWidth,
  children,
  ...rest
}: {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: any;
  fullWidth?: boolean;
  children: ReactNode;
} & ComponentProps<"select">) {
  return (
    <select
      onChange={onChange}
      defaultValue={defaultValue}
      {...rest}
      className={`${
        fullWidth && "w-full"
      } p-2 focus:border-green-500 border my-2 rounded-md outline-none cursor-pointer`}
    >
      {children}
    </select>
  );
}

export default Select;
