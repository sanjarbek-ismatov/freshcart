"use client";
import { useRef } from "react";
import { PopUpContainer } from "@/app/components";

function StarLine({
  ratingLevel,
  percent,
}: {
  ratingLevel: number;
  percent: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <PopUpContainer
      body={`<span class="text-gray-800 font-semibold">100</span>dan <span class="text-gray-800 font-semibold">${percent}%</span> natija`}
    >
      <div className="h-8" ref={ref}>
        <div className="flex w-full items-center">
          <div className="flex items-center">
            <span className="text-slate-500">{ratingLevel}</span>
            <i className="fa-solid text-sm text-yellow-500 fa-star"></i>
          </div>
          <div className="bg-slate-300 w-full relative rounded-sm h-1.5">
            <div
              style={{
                width: percent + "%",
              }}
              className="bg-yellow-500 absolute top-0 left-0 rounded-sm h-1.5"
            ></div>
          </div>
        </div>
      </div>
    </PopUpContainer>
  );
}

export default StarLine;
