import { Backdrop } from "@/app/components";
import React from "react";
import Image from "next/image";

function PreviewImage({
  images,
  setSelected,
  selected,
}: {
  images: string[];
  selected: string | boolean;
  setSelected: React.Dispatch<React.SetStateAction<string | boolean>>;
}) {
  return (
    <>
      <Backdrop />
      <div className="fixed transition duration-500 flex flex-col top-0 z-20 left-0 w-full h-full pb-4">
        <header className="flex w-full justify-between bg-black opacity-75 p-4">
          <h1 className="text-white">Rasm</h1>
          <i
            onClick={() => setSelected(false)}
            className="fa-solid text-white text-2xl fa-xmark cursor-pointer"
          ></i>
        </header>
        <div className="flex-1 flex w-full h-full justify-center items-center my-3">
          {
            <Image
              width={1000}
              height={500}
              className="h-full w-auto"
              src={typeof selected === "string" ? selected : ""}
              alt="Image"
              unoptimized
            />
          }
        </div>
        <div className="flex gap-3 justify-center">
          {images.map((e, i) => (
            <Image
              width={100}
              height={100}
              key={i}
              src={e}
              className="cursor-pointer w-auto max-h-[100px]"
              alt="image"
              onClick={() => setSelected(e)}
              unoptimized
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PreviewImage;
