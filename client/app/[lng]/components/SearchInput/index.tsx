"use client";
import { InputHTMLAttributes } from "react";
import "./SearchInput.css";
import { getTranslation } from "@internalization";
import { useRouter, useSearchParams } from "next/navigation";

function SearchInput({
  placeholder,
  full,
  ...rest
}: {
  placeholder: string;
  full?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  const router = useRouter();
  const t = getTranslation("uz");
  const searchParams = useSearchParams();
  return (
    <form
      className="w-full inline"
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.firstElementChild as HTMLInputElement;
        const params = new URLSearchParams(searchParams as any);
        params.set("name", input.value);
        router.push(`/products?${params.toString()}`);
        input.value = "";
      }}
    >
      <input
        {...rest}
        type="text"
        className={`${
          full ? "w-full" : "w-8/12"
        } outline-none  px-3 py-2 border-slate-300 border rounded-sm`}
        placeholder={t["look-for-products"]}
      />
    </form>
  );
}

export default SearchInput;
