"use client";
import { ProductType } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { Counter } from "@/app/components";
import { useAddToCartMutation } from "@/store/api/ecommerce";

function CartProduct({
  product,
  defCount,
}: {
  product: ProductType;
  defCount: number;
}) {
  const [count, setCount] = useState(defCount);
  const [removeItem] = useAddToCartMutation();
  return (
    <div className="w-[500px] flex justify-between items-center mx-4 my-12">
      <div className="flex items-center">
        <Image
          width={60}
          height={60}
          src={`http://localhost:4000/api/files/image/${product?.images[0]}`}
          alt={`${product?.name} rasmi`}
          unoptimized
        />
        <div className="mx-3">
          <h4 className="font-semibold">{product?.name}</h4>
          <button onClick={() => removeItem({ type: "cart", id: product._id })}>
            Olib tashlash
          </button>
        </div>
      </div>
      <div className="w-[200px] flex justify-between items-center">
        <Counter count={count} setCount={setCount} />
        <p>${product?.price}</p>
      </div>
    </div>
  );
}

export default CartProduct;
