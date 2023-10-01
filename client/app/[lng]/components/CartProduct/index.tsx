"use client";
import { ProductType } from "@types";
import Image from "next/image";
import { useUrlContext } from "@/app/context";

function CartProduct({
  product,
  count,
}: {
  product: ProductType;
  count: number;
}) {
  const url = useUrlContext();
  return (
    <div className="w-[500px] flex px-4 justify-between items-center my-4 border">
      <div className="flex items-center">
        <div className="w-[100px] flex justify-center items-center">
          <Image
            width={100}
            height={100}
            className="h-[100px] w-auto"
            src={`${url}/files/image/${product?.images[0]}`}
            alt={`${product?.name} rasmi`}
            unoptimized
          />
        </div>
        <div className="mx-3">
          <h4 className="font-semibold text-lg">
            {product?.name}{" "}
            <span className="text-gray-500 text-sm">({count}ta)</span>
          </h4>
        </div>
      </div>

      <p>
        <strong>Qiymati:</strong> ${product?.price}
      </p>
    </div>
  );
}

export default CartProduct;
