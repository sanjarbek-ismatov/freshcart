import { InputHTMLAttributes } from "react";
import "./Input.css";
function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className="w-full mt-2 px-3 py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md"
    />
  );
}
export default Input;
