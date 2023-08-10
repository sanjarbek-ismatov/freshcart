import "./Order.css";
import { Table, TableBody, TableHead } from "@components/dashboard";
import { OrderUsableType } from "@types";

function Order({ orders }: { orders?: OrderUsableType[] }) {
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-medium my-4 text-slate-800 text-xl">
        Oxirgi buyurtmalar
      </h1>
      <Table>
        <TableHead
          data={["Raqami", "Nomi", "Sanasi", "Qiymati ($)", "Holati"]}
        />
        <tbody>
          {orders
            ?.slice(-10)
            .map((e, i) => (
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
