import "./Stats.css";
import { ReviewType } from "@types";
import { StarLine } from "@/app/components";
import { useMemo } from "react";

function Stats({ reviews }: { reviews: ReviewType[] }) {
  const stars = reviews.map((e) => e.star);
  const percents = useMemo(() => {
    const resultAsObj: Record<number | string, number> = {};
    for (let i = 1; i <= 5; i++) {
      const startCount = stars.filter((e) => e === i).length;
      resultAsObj[i] = (startCount / stars.length) * 100;
    }
    return resultAsObj;
  }, [stars]);
  return (
    <div className="my-4">
      {Object.keys(percents)
        .reverse()
        .map((e, i) => (
          <StarLine key={i} ratingLevel={+e} percent={percents[e]} />
        ))}
    </div>
  );
}

export default Stats;
