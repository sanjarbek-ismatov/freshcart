import "./Reviews.css";
import { ReviewType } from "@types";
import { ProfileImage, Star, Typography } from "@components";
import Image from "next/image";

function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <div className="flex">
      <div className="w-[300px]"></div>
      <div>
        <Typography text="Izohlar" />
        {reviews.map((e, i) => (
          <div className="flex" key={i}>
            {/*<Image*/}
            {/*  height={50}*/}
            {/*  width={50}*/}
            {/*  src={`http://localhost:4000/api/files/image/${e.clientId.image}`}*/}
            {/*  alt="Profil rasmi"*/}
            {/*  unoptimized*/}
            {/*/>*/}
            <ProfileImage
              image={`http://localhost:4000/api/files/image/${e.clientId.image}`}
              size={50}
            />
            {/*</div>*/}
            <div>
              <div>
                <h4>{e.clientId.name}</h4>
                <p>{new Date(e.date).toDateString()}</p>
              </div>
              <div>
                <Star rating={e.star} />
                <p>{e.body}</p>
                <div className="flex gap-3">
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
