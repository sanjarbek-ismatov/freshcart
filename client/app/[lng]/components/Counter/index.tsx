import "./Counter.css";
import React from "react";
import { Button } from "@components";

function Counter({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div>
      <Button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</Button>
      <span className="mx-3">{count}</span>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
}

export default Counter;
