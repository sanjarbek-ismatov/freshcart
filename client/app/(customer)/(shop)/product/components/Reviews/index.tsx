import { ReviewType } from "@types";
import { Typography } from "@components";
import { ReviewCard } from "@/app/(customer)/(shop)/product/components";

function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <div className="flex">
      <div className="w-[300px]"></div>
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
