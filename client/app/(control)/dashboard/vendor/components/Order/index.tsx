import "./Order.css";
import {
  TableBody,
  TableHead,
} from "@/app/(control)/dashboard/vendor/components";

function Order() {
  return (
    <div className="container mx-auto my-20">
      <h1 className="font-medium my-4 text-slate-800 text-xl">
        Oxirgi buyurtmalar
      </h1>
      <table className="min-w-full bg-white border border-gray-300">
        <TableHead />
        <tbody>
          <TableBody />
          <TableBody />
        </tbody>
      </table>
    </div>
  );
}

export default Order;
