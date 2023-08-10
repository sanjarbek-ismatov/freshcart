"use client";
import { Typography } from "@components";
import { Filter } from "../products/components";
import { useState } from "react";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";
import { OrderList } from "@/app/(control)/dashboard/orders/components";

function OrdersPage() {
  const [text, setText] = useState("");
  const { data } = useGetControllerInfoQuery();
  return (
    <>
      <header className="">
        <Typography text="Buyurtmalar" />
      </header>
      <main>
        <Filter text={text} setText={setText} filter />
        {data && <OrderList data={data} />}
      </main>
    </>
  );
}

export default OrdersPage;
