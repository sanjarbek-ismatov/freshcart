import "./Select.css";
import React, { ReactNode } from "react";

function Select({
  onChange,
  defaultValue,
  fullWidth,
  children,
}: {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: any;
  fullWidth?: boolean;
  children: ReactNode;
}) {
  return (
    <select
      onChange={onChange}
      defaultValue={defaultValue}
      className={`${
        fullWidth && "w-full"
      } p-2 focus:border-green-500 border my-2 rounded-md outline-none cursor-pointer`}
    >
      {children}
    </select>
  );
}

export default Select;
