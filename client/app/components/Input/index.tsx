import { ComponentProps } from "react";
import "./Input.css";

function Input({
  fullWidth,
  label,
  ...rest
}: { fullWidth?: boolean; label?: string } & ComponentProps<"input">) {
  return (
    <label className="text-sm mt-2 text-gray-500">
      {label}
      <input
        {...rest}
        className={`${
          fullWidth && "w-full"
        } mt-2 px-3 py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md`}
      />
    </label>
  );
}

export default Input;
