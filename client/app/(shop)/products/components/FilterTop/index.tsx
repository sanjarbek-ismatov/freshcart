"use client";
import React, { ChangeEvent, useCallback, useEffect } from "react";
import "./FilterTop.css";
import { Sort } from "@/types";

function FilterTop({
  filter,
  setFilter,
  length,
}: {
  filter?: Sort;
  setFilter: React.Dispatch<React.SetStateAction<any>>;
  length: number;
}) {
  const changePageCount = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setFilter({ ...filter, count: +e.target.value });
    },
    [filter]
  );
  const changeSortList = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setFilter({ ...filter, sortBy: e.target.value });
    },
    [filter]
  );
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <>
      <div className="flex justify-between">
        <p>{length}ta maxsulot topildi</p>
        <div className="">
          <select
            onChange={changePageCount}
            defaultValue={filter?.count}
            className="p-2 border-green-500 border mx-2 rounded-md outline-none cursor-pointer"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <select
            onChange={changeSortList}
            defaultValue={filter?.sortBy}
            className="p-2 border-green-500 border mx-2 rounded-md outline-none cursor-pointer"
          >
            <option value="date">Sanasi bo`yicha</option>
            <option value="rating">Reyting bo`yicha</option>
            <option value="low">Avval arzonlari</option>
            <option value="high">Avvat qimmatlari</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterTop;
