"use client";

import { useEffect, useRef, useState } from "react";

function Range({
  onChange,
  minValue,
  maxValue,
}: {
  onChange?: (value: number) => void;
  minValue: number;
  maxValue: number;
}) {
  const [range, setRange] = useState(minValue);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const line = lineRef.current;

    if (!(line instanceof HTMLDivElement)) return;

    const singlePercent = line.clientWidth / 100;

    function changeEvent(event: PointerEvent) {
      if (!line) return;
      if (event.offsetX >= line?.clientWidth) {
        setRange(line.clientWidth);
        onChange && onChange(100);
      } else if (event.offsetX < 0) {
        setRange(0);
        onChange && onChange(0);
      } else {
        setRange(event.offsetX - 5);
        onChange && onChange(Math.round(event.offsetX / singlePercent));
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
      <input
        name="weight"
        type="range"
        min={minValue}
        max={maxValue}
        value={range}
        hidden
      />
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
