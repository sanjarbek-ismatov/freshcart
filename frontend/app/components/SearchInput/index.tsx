import { InputHTMLAttributes } from "react";
import "./SearchInput.css";
function SearchInput({
  placeholder,
  full,
  ...rest
}: {
  placeholder: string;
  full?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      type="text"
      className={`${
        full ? "w-full" : "w-8/12"
      } outline-none  px-3 py-2 border-slate-300 border rounded-sm`}
      placeholder="Maxsulotlarni qidiring"
    />
  );
}
export default SearchInput;
