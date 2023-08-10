"use client";
import { statusFilterDispatch, useAppSelector } from "@/store/store";
import { Input, Select } from "@components";
import React, { useCallback } from "react";

function Filter({
  text,
  setText,
  filter = false,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  filter?: boolean;
}) {
  const changeFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      statusFilterDispatch(event.target.value);
    },
    []
  );
  const state = useAppSelector((state) => state.controlFilter);

  return (
    <div className="flex justify-between my-5">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Qidiring"
        width={300}
      />
      {filter && (
        <Select onChange={changeFilter} defaultValue={state.status}>
          <option value="" selected>
            Holati
          </option>
          <option value="pending">Kutilmoqda</option>
          <option value="processing">Jarayonda</option>
          <option value="finished">Tugatildi</option>
          <option value="rejected">Bekor qilindi</option>
        </Select>
      )}
    </div>
  );
}

export default Filter;
