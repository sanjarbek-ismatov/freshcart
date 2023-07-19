import "./Reviews.css";
import { ReviewType } from "@types";
import { Star, Typography } from "@components";
import { ReviewCard } from "@/app/(customer)/(shop)/product/components";
import { useMemo } from "react";

function StarLine({
  ratingLevel,
  percent,
}: {
  ratingLevel: number;
  percent: number;
}) {
  return (
    <div className="flex w-full items-center">
      <div className="flex items-center">
        <span className="text-slate-500">{ratingLevel}</span>
        <i className="fa-solid text-sm text-yellow-500 fa-star p-1"></i>
      </div>
      <div className="bg-slate-300 w-full relative rounded-sm h-1.5">
        <div
          style={{
            width: percent + "%",
          }}
          className="bg-yellow-500 absolute top-0 left-0 rounded-sm h-1.5"
        ></div>
      </div>
    </div>
  );
}

function Reviews({ reviews }: { reviews: ReviewType[] }) {
  const generalStars = useMemo(() => {
    const accumulator = reviews.reduce(
      (previousValue, currentValue) => {
        return {
          count: ++previousValue.count,
          sum: previousValue.sum + currentValue.star,
        };
      },
      { count: 0, sum: 0 },
    );
    return Math.round(accumulator.sum / accumulator.count);
  }, [reviews]);
  return (
    <div className="flex">
      <div className="w-[300px] p-3 mr-4">
        <Typography text="Statistika" />
        <span>
          <Star rating={generalStars} /> {reviews.length}ta izoh
        </span>
        <div className="my-4 leading-8">
          <StarLine ratingLevel={5} percent={70} />
          <StarLine ratingLevel={4} percent={50} />
          <StarLine ratingLevel={3} percent={20} />
          <StarLine ratingLevel={2} percent={100} />
          <StarLine ratingLevel={1} percent={30} />
        </div>
      </div>
      <div className="flex-1">
        <Typography text={`Izohlar (${reviews.length})`} />
        {reviews.map((e, i) => (
          <ReviewCard key={i} review={e} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
