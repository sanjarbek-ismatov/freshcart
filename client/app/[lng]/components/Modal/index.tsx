"use client";
import React, { ReactNode } from "react";
import "./Modal.css";
import { Backdrop } from "@/app/components";

type ModalProps = {
  title: string;
  children: ReactNode;
  setShow?: React.Dispatch<React.SetStateAction<any>>;
};

const Modal = ({ title, children, setShow }: ModalProps) => {
  return (
    <>
      <Backdrop />
      <div className="w-screen inset-0 h-screen flex justify-center items-center fixed top-0 right-0 z-20 p-3">
        <div className="bg-white max-w-[700px] w-[500px] max-h-full h-auto rounded-md px-5 py-4 overflow-hidden">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-2xl font-bold text-slate-700">{title}</h1>
            <i
              onClick={() => setShow && setShow(false)}
              className="fa-solid text-2xl fa-xmark cursor-pointer"
            ></i>
          </div>
          <div
            style={{
              maxHeight: "calc(100vh - 100px)",
              overflowY: "auto",
            }}
            className="py-5 h-auto overflow-y-auto"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
