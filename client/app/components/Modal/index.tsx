import { forwardRef, ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
  title: string;
  children: ReactNode;
};

const Modal = forwardRef<HTMLElement, ModalProps>(
  ({ title, children }, ref) => {
    return (
      <>
        <div className="w-full fixed top-0 right-0 z-20 opacity-50 min-h-screen h-full bg-black"></div>
        <div className="w-full fixed top-0 right-0 z-20 min-h-screen h-full flex justify-center items-center">
          <div className="bg-white w-[500px] rounded-md px-5 py-4">
            <div className="flex justify-between w-full items-center">
              <h1 className="text-2xl font-bold text-slate-700">{title}</h1>
              <i
                ref={ref}
                className="fa-solid text-2xl fa-xmark cursor-pointer"
              ></i>
            </div>
            <div className="my-4">{children}</div>
          </div>
        </div>
      </>
    );
  }
);
Modal.displayName = "Modal";
export default Modal;
