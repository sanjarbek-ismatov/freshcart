"use client";

import { useEffect, useRef, useState } from "react";

function Range({
  onChange,
  minValue,
  maxValue,
  label,
  inputWidth,
}: {
  onChange?: (value: number) => void;
  minValue: number;
  maxValue: number;
  label?: string;
  inputWidth: number | "full";
}) {
  const [range, setRange] = useState(minValue);
  const [width, setWidth] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const line = lineRef.current;

    if (!(line instanceof HTMLDivElement)) return;

    const singlePercent = line.clientWidth / 100;

    function changeEvent(event: PointerEvent) {
      if (!line) return;
      const step = line.clientWidth / maxValue;
      if (event.offsetX >= line?.clientWidth) {
        setRange(maxValue);
        setWidth(line.clientWidth);
        onChange && onChange(maxValue);
      } else if (event.offsetX < 0) {
        setRange(minValue);
        setWidth(0);
        onChange && onChange(minValue);
      } else {
        const currentRange = (event.offsetX - 5) / step;
        setRange(currentRange);
        setWidth(event.offsetX - 5);
        onChange && onChange(Math.round(currentRange));
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
  }, [lineRef, setRange, onChange, maxValue, minValue]);

  return (
    <label
      style={{
        width: inputWidth === "full" ? "100%" : inputWidth,
      }}
      className="text-sm text-gray-500"
    >
      <p>{label}</p>
      <div className="m-3 flex items-center">
        <input
          name="weight"
          type="range"
          min={minValue}
          max={maxValue}
          value={Math.ceil(range)}
          hidden
        />
        <div className="w-full">
          <div ref={lineRef} className="w-full bg-gray-200 relative p-1">
            <div
              style={{ left: `${width}px` }}
              className="bg-green-500 w-4 h-4 top-[-4px] absolute rounded-full inline-block cursor-pointer"
            ></div>
          </div>
        </div>
        <span className="ml-4">{Math.ceil(range)}</span>
      </div>
    </label>
  );
}
export default Range;
