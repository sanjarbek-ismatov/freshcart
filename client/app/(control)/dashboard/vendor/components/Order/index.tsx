import "./Order.css";
import {
  Table,
  TableBody,
  TableHead,
} from "@/app/(control)/dashboard/vendor/components";

function Order() {
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-medium my-4 text-slate-800 text-xl">
        Oxirgi buyurtmalar
      </h1>
      <Table>
        <TableHead data={["Raqami", "Nomi", "Sanasi", "Qiymati", "Holati"]} />
        <tbody>
          <TableBody
            data={["1121212", "Snikers", "12.12.2000", "10", "Pending"]}
          />
          <TableBody
            data={["1121212", "Snikers", "12.12.2000", "10", "Finished"]}
          />
        </tbody>
      </Table>
    </div>
  );
}

export default Order;
