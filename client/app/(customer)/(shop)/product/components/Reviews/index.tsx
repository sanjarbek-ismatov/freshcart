import "./Reviews.css";
import { ReviewType } from "@types";
import { ProfileImage, Star, Typography } from "@components";
import Image from "next/image";

function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <div className="flex">
      <div className="w-[300px]"></div>
      <div>
        <Typography text={`Izohlar (${reviews.length})`} />
        {reviews.map((e, i) => (
          <div className="flex gap-x-5" key={i}>
            <div>
              <ProfileImage
                image={`http://localhost:4000/api/files/image/${e.clientId.image}`}
                size={60}
              />
            </div>
            <div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800">
                  {e.clientId.name}
                </h4>
                <p className="text-slate-500 text-sm">
                  {new Date(e.date).toDateString()}
                </p>
              </div>
              <div className="my-3">
                <Star rating={e.star} />
                <p className="text-slate-600">{e.body}</p>
                <div className="flex gap-3 my-3">
                  {e.images.map((e, i) => (
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
        ))}
      </div>
    </div>
  );
}

export default Reviews;
