"use client";

import { useAddToCartMutation } from "@/store/api/ecommerce";
import { useCallback, useMemo } from "react";
import { useUserContext } from "@/app/context";

function LikeButton({ id }: { id: string }) {
  const data = useUserContext();
  const isLiked = useMemo(
    () => data?.liked.find((e) => e._id.toString() === id.toString()),
    [data?.liked, id]
  );
  const [addToLiked] = useAddToCartMutation();
  const submitLiked = useCallback(() => {
    isLiked &&
      addToLiked({
        type: "like",
        id,
      });
  }, [addToLiked, id, isLiked]);
  return (
    <button onClick={submitLiked}>
      <i
        className={` ${
          isLiked ? "text-red-600 fa-solid" : "fa-regular"
        } bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-heart`}
      ></i>
    </button>
  );
}

export default LikeButton;
