"use client";
import React, { ChangeEvent, useCallback } from "react";
import "./FilterTop.css";
import { Sort } from "@types";
import {
  countItemDispatch,
  sortByDispatch,
  useAppSelector,
} from "@/store/store";
import { Select } from "@components";

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
          <Select onChange={changePageCount} defaultValue={state.count}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
          <Select onChange={changeSortList} defaultValue={state.sortBy}>
            <option value="date">Sanasi bo`yicha</option>
            <option value="rating">Reyting bo`yicha</option>
            <option value="low">Avval arzonlari</option>
            <option value="high">Avvat qimmatlari</option>
          </Select>
        </div>
      </div>
    </>
  );
}

export default FilterTop;
