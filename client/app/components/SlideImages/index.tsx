import "./SlideImages.css";
import { ProductType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { getServerUrl } from "@/app/utils/getServerUrl";

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
    <div className="flex overflow-x-scroll my-4">
      {product.images.map((e, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url("${getServerUrl()}/files/image/${e}")`,
          }}
          onClick={() => setCurrent(i)}
          className={`cursor-pointer border-2 bg-center w-[200px] bg-cover ${
            current === i ? "border-green-600" : ""
          } h-[100px] m-2 rounded-md `}
        ></div>
      ))}
    </div>
  );
}

export default SlideImages;
