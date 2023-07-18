import "./PreviewImage.css";
import { Backdrop } from "@/app/components";
import React from "react";
import Image from "next/image";

function PreviewImage({
  images,
  setShow,
}: {
  images: string[];
  setShow: React.Dispatch<React.SetStateAction<string | boolean>>;
}) {
  return (
    <>
      <Backdrop />
      <div className="fixed top-0 z-20 left-0 w-full h-full">
        <header className="flex">
          <h1 className="text-white">Rasm</h1>
          <i
            onClick={() => setShow && setShow(false)}
            className="fa-solid text-white text-2xl fa-xmark cursor-pointer"
          ></i>
        </header>
        <div>
          {images.map((e, i) => (
            <Image
              key={i}
              width={600}
              height={600}
              src={e}
              alt="Image"
              unoptimized
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PreviewImage;
