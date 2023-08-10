"use client";
import { useState } from "react";

function Description({ description }: { description: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="my-3 border p-3">
      <div
        onClick={() => setShow(!show)}
        className="flex cursor-pointer justify-between items-center mb-3 border p-3"
      >
        <h4 className="text-slate-800 font-semibold text-xl">
          Maxsulot haqida
        </h4>
        <i
          className={`fa-solid transition-all ${
            show ? "-rotate-180" : "rotate-0"
          } fa-chevron-down`}
        ></i>
      </div>
      <p
        className={`transition-all duration-500 ${
          !show ? "max-h-[30px]" : "max-h-screen"
        } overflow-hidden`}
      >
        {description}
      </p>
    </div>
  );
}

export default Description;
