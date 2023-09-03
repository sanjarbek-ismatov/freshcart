import "./ProfileImage.css";
import React, { useMemo } from "react";

function ProfileImage({
  image,
  size,
  editable = false,
}: {
  image?: string;
  size: number;
  editable?: boolean;
}) {
  const imageSrc = useMemo(
    () =>
      image
        ? image.toString()
        : "https://img.freepik.com/free-icon/user_318-159711.jpg",
    [image]
  );
  return (
    <div
      style={{
        backgroundImage: `url("${imageSrc}")`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className="relative cursor-pointer block bg-cover bg-center bg-no-repeat rounded-full"
    >
      {editable && (
        <div className="group hover:bg-black hover:bg-opacity-50 transition-colors absolute rounded-full flex justify-center items-center top-0 left-0 w-full h-full ">
          <i className="fa-solid fa-upload group-hover:text-white text-transparent text-3xl"></i>
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
