import { ComponentProps } from "react";
import "./Input.css";

function Input({
  fullWidth = true,
  label,
  isError,
  ...rest
}: {
  fullWidth?: boolean;
  label?: string;
  isError?: boolean;
} & ComponentProps<"input">) {
  return (
    <label className="text-sm mt-2 text-gray-500">
      {label}
      <input
        {...rest}
        className={`${fullWidth && "w-full"} mt-2 px-3 py-2 outline-none ${
          isError
            ? "border-red-500 text-red-500"
            : "focus:border-green-500"
        }  border-slate-300  border-2 rounded-md`}
      />
    </label>
  );
}

export default Input;
