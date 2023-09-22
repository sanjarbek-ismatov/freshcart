"use client";
import Button from "../Button";
import SearchInput from "../SearchInput";
import "./SidePanel.css";
import { getTranslation } from "@internalization";
import React from "react";

function SidePanel({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = getTranslation("uz");
  return (
    <>
      <div className={`${show ? "w-full h-screen absolute bg-black top-0 left-0 opacity-50 z-30" : ""} `}></div>
      <div
        style={{
          left: show ? "0" : "-100%",
        }}
        className={`fixed transition-all duration-500 block h-screen w-96 bg-white top-0 z-50 p-4`}
      >
        <div className="flex justify-between items-center my-3">
          <span className='font-bold'>{t.menu}</span>
          <i onClick={() => setShow(!show)} className="fa-solid fa-xmark text-xl"></i>
        </div>
        <div>
          <SearchInput full placeholder={t["enter-product-name"]} />
          <Button full>{t.search}</Button>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
