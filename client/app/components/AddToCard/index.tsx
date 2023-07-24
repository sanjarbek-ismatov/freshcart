"use client";
import "./AddToCard.css";
import { useCallback, useState } from "react";
import { Button, Counter } from "@components";
import { useAddToCartMutation } from "@/store/api/ecommerce";
import { ProductType } from "@types";
import { useUserContext } from "@/app/context";

function AddToCard({ product }: { product: ProductType }) {
  const { refetch } = useUserContext();
  const [addToCart] = useAddToCartMutation();
  const [count, setCount] = useState(1);
  const handleSubmit = useCallback(() => {
    addToCart({
      type: "cart",
      id: product._id,
      count,
    }).then(() => refetch());
  }, [addToCart, count, product._id, refetch]);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Counter count={count} setCount={setCount} />
        <span>
          <strong>Qiymati:</strong> {10 * count}$
        </span>
      </div>
      <div>
        <Button onClick={handleSubmit}>
          <i className="fa-solid fa-cart-shopping"></i> Savatchaga qo`shish
        </Button>
      </div>
    </div>
  );
}

export default AddToCard;
