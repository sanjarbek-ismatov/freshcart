import "./Select.css";
import React, { ReactNode } from "react";

function Select({
  onChange,
  defaultValue,
  children,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: any;
  children: ReactNode;
}) {
  return (
    <select
      onChange={onChange}
      defaultValue={defaultValue}
      className="p-2 border-green-500 border mx-2 rounded-md outline-none cursor-pointer"
    >
      {children}
    </select>
  );
}

export default Select;
