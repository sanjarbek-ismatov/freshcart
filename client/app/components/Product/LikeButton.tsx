"use client";

import { useAddToCartMutation } from "@/store/api/ecommerce";
import { useCallback } from "react";
import { useUserContext } from "@/app/context";

function LikeButton({ id }: { id: string }) {
  const data = useUserContext();
  console.log(data);
  const [addToLiked] = useAddToCartMutation();
  const submitLiked = useCallback(() => {
    addToLiked({
      type: "like",
      id,
    });
  }, [addToLiked, id]);
  return (
    <button onClick={submitLiked}>
      <i className="fa-regular bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-heart"></i>
    </button>
  );
}

export default LikeButton;
