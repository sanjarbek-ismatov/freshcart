"use client";
import { useUserContext } from "@/app/context";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAddToCartMutation } from "@/store/api/ecommerce";

function LikeButton({ id }: { id: string }) {
  const { data } = useUserContext();
  const [addToLiked, { isSuccess }] = useAddToCartMutation();
  const isLiked = useMemo(
    () =>
      Boolean(
        data?.user.liked?.find((e) => e._id.toString() === id.toString()),
      ),
    [data?.user.liked, id],
  );
  const [liked, setLiked] = useState(isLiked || false);

  const submitLiked = useCallback(() => {
    if (!liked) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    addToLiked({
      type: "like",
      id,
    });
  }, [addToLiked, id, liked]);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  return (
    <button title="Yoqtirish" onClick={submitLiked}>
      <i
        className={`${
          liked ? "text-red-600 fa-solid" : "fa-regular"
        } bg-white py-2 px-3 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white transition-colors ease-in duration-100 text-slate-900 mx-1 text-2xl fa-heart`}
      ></i>
    </button>
  );
}

export default LikeButton;
