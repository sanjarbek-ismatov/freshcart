"use client";
import { Modal, Typography } from "@components";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import {
  OrderItem,
  OrderModal,
} from "@/app/(customer)/account/orders/components";
import { useState } from "react";
import { OrderUsableType } from "@types";

function OrdersPage() {
  const { data, refetch } = useGetUserInfoQuery();
  const [selected, setSelected] = useState<OrderUsableType | false>();
  return (
    <div className="w-full">
      <Typography text="Buyurtmalar" />
      {data?.orders.map((e, i) => (
        <OrderItem onClick={() => setSelected(e)} key={i} item={e} />
      ))}
      {selected && (
        <Modal setShow={setSelected} title="Buyurtma haqida">
          <OrderModal order={selected} refetch={refetch} />
        </Modal>
      )}
    </div>
  );
}

export default OrdersPage;
