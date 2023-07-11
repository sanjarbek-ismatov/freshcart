"use client";
import { Modal, Typography } from "@components";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { OrderItem } from "@/app/(customer)/account/orders/components";
import { useState } from "react";
import { OrderType, ProductType, VendorType } from "@types";

function OrdersPage() {
  const { data } = useGetUserInfoQuery();
  const [selected, setSelected] = useState<
    OrderType<ProductType, VendorType> | false
  >();
  return (
    <div className="w-full">
      <Typography text="Buyurtmalar" />
      {data?.orders.map((e, i) => (
        <OrderItem onClick={() => setSelected(e)} key={i} item={e} />
      ))}
      {selected && (
        <Modal setShow={setSelected} title="Buyurtma haqida">
          {selected.status}
        </Modal>
      )}
    </div>
  );
}

export default OrdersPage;
