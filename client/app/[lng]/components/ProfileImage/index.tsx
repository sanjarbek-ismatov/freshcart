import "./ProfileImage.css";
import React, { useMemo } from "react";

function ProfileImage({ image, size }: { image?: string; size: number }) {
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
      className="block bg-cover bg-center bg-no-repeat rounded-full"
    ></div>
  );
}

export default ProfileImage;
