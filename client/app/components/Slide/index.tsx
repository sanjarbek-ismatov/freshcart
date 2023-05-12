"use client";
import "./Slide.css";
import { useEffect, useState } from "react";
import { SlideImages } from "@/app/components";
import { ProductType } from "@/types";

function Slide({ product }: { product: ProductType }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const previewImage = document.getElementsByClassName(
      "active"
    )[0] as HTMLElement;
    previewImage?.addEventListener("mousemove", (e) => {
      const x = (e.offsetX / 600) * 100;
      const y = (e.offsetY / 600) * 100;
      previewImage.style.backgroundSize = "1200px";
      previewImage.style.backgroundPosition = `${x}% ${y}%`;
    });
    previewImage?.addEventListener("mouseout", (e) => {
      previewImage.style.backgroundSize = "cover";
      previewImage.style.backgroundPosition = "center";
    });
    const slider = document.getElementById("slider") as HTMLDivElement;
    const px = current * 600;
    slider.style.transform = `translateX(-${px}px)`;
  }, [current]);
  return (
    <div className="">
      <div className="overflow-x-hidden w-[600px] h-[600px] relative">
        <div
          id="slider"
          className="h-[600px] flex  absolute overflow-hidden duration-500 top-0 left-0"
        >
          {product.images.map((e, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url("http://localhost:4000/api/files/image/${e}")`,
              }}
              className={`w-[600px] h-[600px] left-0 top-0 bg-center bg-no-repeat hover:cursor-zoom-in ${
                current === i ? "active" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      <SlideImages
        current={current}
        setCurrent={setCurrent}
        product={product}
      />
    </div>
  );
}

export default Slide;
