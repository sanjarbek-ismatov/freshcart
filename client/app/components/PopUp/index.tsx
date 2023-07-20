"use client";
import { RefObject, useEffect, useState } from "react";

function PopUp({
  compRef,
  body,
}: {
  compRef: RefObject<HTMLDivElement>;
  body: string;
}) {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    const elem = compRef.current;
    if (!elem) return;
    const rect = elem?.getBoundingClientRect();
    const WIDTH = elem.clientWidth;
    const HEIGHT = elem.clientHeight;
    elem.onmouseenter = function () {
      setShow(true);
    };
    elem.onmouseleave = function () {
      setShow(false);
    };
    setCoordinates({
      x: rect.x + window.scrollX,
      y: rect.bottom + window.scrollY,
    });
  }, [compRef]);
  return (
    <div
      style={{
        top: coordinates.y + "px",
        left: coordinates.x + "px",
      }}
      className={`absolute p-3 bg-white z-20 border ${
        show ? "block" : "hidden"
      } rounded-md`}
    >
      <p>{body}</p>
    </div>
  );
}

export default PopUp;
