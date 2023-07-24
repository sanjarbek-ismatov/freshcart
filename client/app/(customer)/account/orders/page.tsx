"use client";
import { Modal, Typography } from "@components";
import {
  OrderItem,
  OrderModal,
} from "@/app/(customer)/account/orders/components";
import { useState } from "react";
import { OrderUsableType } from "@types";
import { useUserContext } from "@/app/context";

function OrdersPage() {
  const { data, refetch } = useUserContext();
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
