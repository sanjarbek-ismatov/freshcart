import "./Reviews.css";
import { ReviewType } from "@types";
import { Star, Stats, Typography } from "@components";
import { ReviewCard } from "@/app/(customer)/(shop)/product/components";

function Reviews({ reviews, star }: { reviews: ReviewType[]; star: number }) {
  return (
    <div className="flex">
      <div className="w-[300px] p-3 mr-4">
        <Typography text="Statistika" />
        <span>
          <Star rating={star} /> {reviews.length}ta izoh
        </span>
        <Stats reviews={reviews} />
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
