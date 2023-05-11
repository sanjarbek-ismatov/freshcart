"use client";
import React, { ChangeEvent, useCallback } from "react";
import "./FilterTop.css";
import { Sort } from "@/types";
import {
  countItemDispatch,
  sortByDispatch,
  useAppSelector,
} from "@/store/store";

function FilterTop({ length }: { length: number }) {
  const state = useAppSelector((state) => state.filter);

  const changePageCount = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    countItemDispatch(+e.target.value);
  }, []);
  const changeSortList = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    sortByDispatch(e.target.value as Sort);
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <p>{length}ta maxsulot topildi</p>
        <div className="">
          <select
            onChange={changePageCount}
            defaultValue={state.count}
            className="p-2 border-green-500 border mx-2 rounded-md outline-none cursor-pointer"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <select
            onChange={changeSortList}
            defaultValue={state?.sortBy}
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
