import { InputHTMLAttributes } from "react";
import "./SearchInput.css";
import { getTranslation } from "@internalization";

function SearchInput({
  placeholder,
  full,
  ...rest
}: {
  placeholder: string;
  full?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  const t = getTranslation("uz");
  return (
    <input
      {...rest}
      type="text"
      className={`${
        full ? "w-full" : "w-8/12"
      } outline-none  px-3 py-2 border-slate-300 border rounded-sm`}
      placeholder={t["look-for-products"]}
    />
  );
}

export default SearchInput;
