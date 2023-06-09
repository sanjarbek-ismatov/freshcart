"use client";
import "./AddToCard.css";
import { useCallback, useState } from "react";
import { Button, Counter } from "@components";
import { useAddToCartMutation } from "@/store/api/ecommerce";
import { ProductType } from "@types";

function AddToCard({ product }: { product: ProductType }) {
  const [addToCart] = useAddToCartMutation();
  const [count, setCount] = useState(0);
  const handleSubmit = useCallback(() => {
    addToCart({
      type: "cart",
      id: product._id,
      count,
    });
  }, [addToCart, count, product._id]);
  return (
    <div className="mt-14">
      <Counter count={count} setCount={setCount} />
      <div>
        <Button onClick={handleSubmit}>
          <i className="fa-solid fa-cart-shopping"></i> Savatchaga qo`shish
        </Button>
      </div>
    </div>
  );
}

export default AddToCard;
