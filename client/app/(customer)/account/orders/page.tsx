"use client";
import { Typography } from "@components";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { OrderItem } from "@/app/(customer)/account/orders/components";

function OrdersPage() {
  const { data } = useGetUserInfoQuery();
  return (
    <div className="w-full">
      <Typography text="Buyurtmalar" />
      {data?.orders.map((e, i) => <OrderItem key={i} item={e} />)}
    </div>
  );
}

export default OrdersPage;
