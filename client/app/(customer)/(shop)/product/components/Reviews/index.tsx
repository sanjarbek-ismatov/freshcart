import "./Reviews.css";
import { ReviewType } from "@types";
import { ProfileImage } from "@components";

function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <div>
      <h4>Izohlar</h4>
      {reviews.map((e, i) => (
        <div key={i}>
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
            <h4>{e.clientId.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
