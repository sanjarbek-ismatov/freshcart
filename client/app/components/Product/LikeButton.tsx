"use client";
import { useUserContext } from "@/app/context";
import { useCallback, useMemo, useState } from "react";
import { useAddToCartMutation } from "@/store/api/ecommerce";

function LikeButton({ id }: { id: string }) {
  const data = useUserContext();

  const [addToLiked, { isSuccess }] = useAddToCartMutation();

  const isLiked = useMemo(
    () =>
      Boolean(
        data?.liked.find((e) => e._id.toString() === id.toString())
      ).valueOf(),
    [data?.liked, id]
  );

  const [liked, setLiked] = useState(() => isLiked);

  const submitLiked = useCallback(() => {
    if (!liked) {
      addToLiked({
        type: "like",
        id,
      });
      setLiked(true);
    } else {
      console.log(false);
    }
  }, [addToLiked, id, liked]);

  return (
    <button onClick={submitLiked}>
      <i
        className={`${
          liked ? "text-red-600 fa-solid" : "fa-regular"
        } bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-heart`}
      ></i>
    </button>
  );
}

export default LikeButton;
