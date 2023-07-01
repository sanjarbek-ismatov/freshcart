"use client";
import { Typography } from "@components";
import { Filter } from "../products/components";
import { useState } from "react";
import { OrderList } from "./components";

function OrdersPage() {
  const [text, setText] = useState("");
  return (
    <>
      <header className="">
        <Typography text="Buyurtmalar" />
      </header>
      <main>
        <Filter text={text} setText={setText} filter />
        <OrderList />
      </main>
    </>
  );
}
export default OrdersPage;
