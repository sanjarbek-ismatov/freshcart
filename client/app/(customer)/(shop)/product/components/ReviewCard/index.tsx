import { ReviewType } from "@types";
import { ProfileImage, Star } from "@components";
import Image from "next/image";

function ReviewCard({ review }: { review: ReviewType }) {
  return (
    <div className="flex gap-x-5">
      <div>
        <ProfileImage
          image={`http://localhost:4000/api/files/image/${review.clientId.image}`}
          size={60}
        />
      </div>
      <div>
        <div>
          <h4 className="text-lg font-semibold text-slate-800">
            {review.clientId.name}
          </h4>
          <p className="text-slate-500 text-sm">
            {new Date(review.date).toDateString()}
          </p>
        </div>
        <div className="my-3">
          <Star rating={review.star} />
          <p className="text-slate-600">{review.body}</p>
          <div className="flex gap-3 my-3">
            {review.images.map((e, i) => (
              <Image
                key={i}
                width={70}
                height={70}
                className="w-[70px] h-[70px] object-cover"
                src={`http://localhost:4000/api/files/image/${e}`}
                alt="Rasmlar"
                unoptimized
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
