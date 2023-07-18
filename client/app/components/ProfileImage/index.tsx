import "./ProfileImage.css";
import React, { useMemo } from "react";

function ProfileImage({ image, size }: { image: string; size: number }) {
  const imageSrc = useMemo(
    () =>
      image
        ? image.toString()
        : "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
    [image],
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
