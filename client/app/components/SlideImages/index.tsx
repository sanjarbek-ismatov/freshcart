import "./SlideImages.css";
import Image from "next/image";
import { ProductType } from "@/types";
import { Dispatch, SetStateAction } from "react";

function SlideImages({
  product,
  current,
  setCurrent,
}: {
  product: ProductType;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex overflow-x-scroll">
      {product.images.map((e, i) => (
        <Image
          key={i}
          width={200}
          height={200}
          onClick={() => setCurrent(i)}
          src={`http://localhost:4000/api/files/image/${e}`}
          alt="Image"
          unoptimized
        />
      ))}
    </div>
  );
}

export default SlideImages;
