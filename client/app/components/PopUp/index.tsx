"use client";
import { RefObject, useRef } from "react";

function PopUp({
  compRef,
  body,
}: {
  compRef: RefObject<HTMLDivElement>;
  body: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      style={
        {
          // top: coordinates.y + "px",
          // left: coordinates.x + "px",
        }
      }
      className={`absolute p-3 bg-white z-20 border ${
        ""
        // show ? "block" : "hidden"
      } rounded-md`}
    >
      <p>{body}</p>
    </div>
  );
}

export default PopUp;
