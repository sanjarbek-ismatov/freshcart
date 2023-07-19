import { ReviewType } from "@types";
import { Star, Typography } from "@components";
import { ReviewCard } from "@/app/(customer)/(shop)/product/components";
import { useMemo } from "react";

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
      <div className="w-[300px]">
        <Typography text="Statistika" />
        <Star rating={generalStars} />
        {/*<i className="fa-solid text-sm text-yellow-500 fa-star"></i>*/}
      </div>
      <div>
        <Typography text={`Izohlar (${reviews.length})`} />
        {reviews.map((e, i) => (
          <ReviewCard key={i} review={e} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
