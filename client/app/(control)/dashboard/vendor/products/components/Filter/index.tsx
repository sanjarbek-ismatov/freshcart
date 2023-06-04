"use client";
import { Input, Select } from "@/app/components";
import { statusFilterDispatch, useAppSelector } from "@/store/store";
import React, { useCallback } from "react";

function Filter() {
  const changeFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      statusFilterDispatch(event.target.value);
    },
    []
  );
  const state = useAppSelector((state) => state.controlFilter);

  return (
    <div className="flex justify-between my-5">
      <Input placeholder="Qidiring" width={300} />
      <Select onChange={changeFilter} defaultValue={state.status}>
        <option value="">status</option>
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="finished">Finished</option>
        <option value="rejected">Rejected</option>
      </Select>
    </div>
  );
}

export default Filter;
