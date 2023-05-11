"use client";
import "./Slide.css";
import { useEffect } from "react";

function Slide() {
  useEffect(() => {
    const previewImage = document.getElementById("previewImage");
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
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url("https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg")',
        }}
        className="w-[600px] h-[600px] bg-center hover:cursor-zoom-in"
        id="previewImage"
      ></div>
      <div></div>
    </div>
  );
}

export default Slide;
