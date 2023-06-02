import "./Select.css";
import React, { ReactNode } from "react";

function Select({
  onChange,
  state,
  children,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  state: {
    price: [number, number];
    count: number;
    sortBy: string;
    stars: number[];
    vendors: string[];
  };
  children: ReactNode;
}) {
  return (
    <select
      onChange={onChange}
      defaultValue={state.count}
      className="p-2 border-green-500 border mx-2 rounded-md outline-none cursor-pointer"
    >
      {children}
    </select>
  );
}

export default Select;
