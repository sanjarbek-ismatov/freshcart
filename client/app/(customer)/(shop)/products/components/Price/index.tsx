"use client";
import { Button, Input } from "@/app/components";
import "./Price.css";
import { useState } from "react";
import { priceDispatch } from "@/store/store";

function Price() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  return (
    <>
      <div className="leading-7">
        <h1 className="font-semibold text-lg">Narx oralig`i</h1>
        <div className="flex">
          <Input
            min="0"
            onChange={(e) => setMin(+e.target.value)}
            placeholder="0"
            defaultValue={min}
            type="number"
          />
          <Input
            min="0"
            onChange={(e) => setMax(+e.target.value)}
            defaultValue={max}
            placeholder="9999+"
            type="number"
          />
        </div>
        <Button
          type="submit"
          onClick={() => priceDispatch([min || 0, max || 99999])}
        >
          Qo`llash
        </Button>
      </div>
    </>
  );
}

export default Price;
