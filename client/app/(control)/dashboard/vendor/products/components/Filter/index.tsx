"use client";
import { Input, Select } from "@/app/components";

function Filter() {
  return (
    <div>
      <Input />
      <Select onChange={(e) => console.log(e.target.value)} state={{} as any}>
        <option>Hello</option>
      </Select>
    </div>
  );
}

export default Filter;
