import React from "react";

function ReviewStars({
  star,
  setStar,
}: {
  star: number;
  setStar: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="text-center  my-3 py-3 border">
      <p className="font-normal my-3 text-lg">Maxsulotni qanday baholaysiz?</p>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <i
          key={i}
          onClick={() => setStar(e)}
          className={`fa-solid fa-star text-2xl mx-1 ${
            star >= e ? "text-yellow-500" : "text-slate-300"
          }`}
        ></i>
      ))}
    </div>
  );
}

export default ReviewStars;
