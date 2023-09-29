import "./Order.css";
import { Table, TableBody, TableHead } from "@components/dashboard";
import { OrderUsableType } from "@types";
import { useMemo } from "react";

function Order({ orders }: { orders?: OrderUsableType[] }) {
  const pendingOrders = useMemo(
    () => orders?.filter((e) => e.status === "pending"),
    [orders],
  );
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-medium my-4 text-slate-800 text-xl">
        Yangi buyurtmalar
      </h1>
      <Table>
        <TableHead
          data={["Raqami", "Nomi", "Sanasi", "Qiymati ($)", "Holati"]}
        />
        <tbody>
          {pendingOrders?.map((e, i) => (
            <TableBody
              key={i}
              data={[
                e.slug,
                e.productId.name,
                new Date(e.date).toLocaleDateString(),
                e.totalPrice,
                e.status,
              ]}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Order;
