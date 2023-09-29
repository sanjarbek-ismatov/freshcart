"use client";
import "./AddToCard.css";
import { useCallback, useState } from "react";
import { Button, Counter, LoadingModal } from "@components";
import { useAddToCartMutation } from "@/store/api/ecommerce";
import { ProductType } from "@types";
import { useUserContext } from "@/app/context";

function AddToCard({ product }: { product: ProductType }) {
  const { refetch } = useUserContext();
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const [count, setCount] = useState(1);
  const handleSubmit = useCallback(() => {
    addToCart({
      type: "cart",
      id: product._id,
      count,
    }).then(() => refetch());
  }, [addToCart, count, product._id, refetch]);
  return (
    <>
      <div className="flex items-center justify-between">
        <Counter count={count} setCount={setCount} />
        <span>
          <strong>Qiymati:</strong> {product.price}$
        </span>
      </div>
      <div>
        <Button onClick={handleSubmit}>
          <i className="fa-solid fa-cart-shopping"></i> Savatchaga qo`shish
        </Button>
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
}

export default AddToCard;
