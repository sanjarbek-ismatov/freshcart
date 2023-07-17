import "./Reviews.css";
import { ReviewType } from "@types";

function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <div>
      <h4>Izohlar</h4>
      {reviews.map((e, i) => (
        <p key={i}>{e.body}</p>
      ))}
    </div>
  );
}

export default Reviews;
