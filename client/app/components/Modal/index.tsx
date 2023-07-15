"use client";
import React, { ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
  title: string;
  children: ReactNode;
  setShow?: React.Dispatch<React.SetStateAction<any>>;
};

const Modal = ({ title, children, setShow }: ModalProps) => {
  return (
    <>
      <div className="w-full fixed top-0 right-0 z-20 opacity-50 min-h-screen h-full bg-black"></div>
      <div className="w-full fixed top-0 right-0 z-20 min-h-screen h-full flex justify-center items-center">
        <div className="bg-white min-w-[500px] rounded-md px-5 py-4">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-2xl font-bold text-slate-700">{title}</h1>
            <i
              onClick={() => setShow && setShow(false)}
              className="fa-solid text-2xl fa-xmark cursor-pointer"
            ></i>
          </div>
          <div className="my-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
