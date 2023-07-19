import "./Stats.css";
import { ReviewType } from "@types";
import { StarLine } from "@/app/components";
import { useMemo } from "react";

function Stats({ reviews }: { reviews: ReviewType[] }) {
  const stars = reviews.map((e) => e.star);
  const percents = useMemo(() => {
    const single = 100 / stars.length;
  }, []);
  return (
    <div className="my-4 leading-8">
      <StarLine ratingLevel={5} percent={70} />
      <StarLine ratingLevel={4} percent={50} />
      <StarLine ratingLevel={3} percent={20} />
      <StarLine ratingLevel={2} percent={100} />
      <StarLine ratingLevel={1} percent={30} />
    </div>
  );
}

export default Stats;
