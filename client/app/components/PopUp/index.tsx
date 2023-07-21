"use client";
import { forwardRef } from "react";

const PopUp = forwardRef<
  HTMLDivElement,
  { x: number; y: number; body: string }
>(function PopUp({ x, y, body }, ref) {
  return (
    <div
      ref={ref}
      style={{
        top: y + "px",
        left: x + "px",
      }}
      className={`absolute p-3 bg-white z-20 border rounded-md`}
    >
      <p>{body}</p>
    </div>
  );
});

export default PopUp;
