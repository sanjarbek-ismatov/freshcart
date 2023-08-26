"use client";

import { RefObject, useEffect, useRef, useState } from "react";

function Range({
  onChange,
  value,
}: {
  onChange: (value: number) => void;
  value: number;
}) {
  const [range, setRange] = useState(value);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const line = lineRef.current;

    if (!(line instanceof HTMLDivElement)) return;

    const singlePercent = line.clientWidth / 100;

    function changeEvent(event: PointerEvent) {
      if (!line) return;
      if (event.offsetX >= line?.clientWidth) {
        setRange(line.clientWidth);
        onChange(100);
      } else if (event.offsetX < 0) {
        setRange(0);
        onChange(0);
      } else {
        setRange(event.offsetX - 5);
        onChange(Math.round(event.offsetX / singlePercent));
      }
    }

    function pointerDown(event: PointerEvent) {
      line?.setPointerCapture(event.pointerId);
      changeEvent(event);
      line?.addEventListener("pointermove", pointerMove);
    }

    function pointerUp() {
      line?.removeEventListener("pointermove", pointerMove);
    }

    function pointerMove(event: PointerEvent) {
      changeEvent(event);
    }

    line.addEventListener("pointerdown", pointerDown);
    line.addEventListener("pointerup", pointerUp);

    return () => {
      line.removeEventListener("pointerdown", pointerDown);
      line.removeEventListener("pointerup", pointerUp);
      line.removeEventListener("pointermove", pointerMove);
    };
  }, [lineRef, setRange, onChange]);

  return (
    <div className="m-3">
      <div ref={lineRef} className="w-full bg-gray-200 relative p-1">
        <div
          style={{ left: `${range}px` }}
          className="bg-green-500 w-4 h-4 top-[-4px] absolute rounded-full inline-block cursor-pointer"
        ></div>
      </div>
    </div>
  );
}
export default Range;
