import "./OrderItem.css";
import { OrderType, ProductType, VendorType } from "@types";
import Image from "next/image";

function OrderItem({ item }: { item: OrderType<ProductType, VendorType> }) {
  return (
    <div className="w-full flex items-center bg-slate-100 p-3">
      <div className="mr-4">
        <Image
          width={80}
          height={80}
          src={`http://localhost:4000/api/files/image/${item.productId.images[0]}`}
          alt="Order"
          unoptimized
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-800">
          {item.productId.name}
        </h4>
        <p className="text-sm text-slate-600">#{item.slug}</p>
        <p className="text-[10px] text-slate-500">
          {new Date(item.date).toDateString()}
        </p>
      </div>
      <div className="flex justify-between w-full ml-4">
        <div className="w-1/2">
          <span className="bg-green-600 text-[12px]  text-white  p-1 rounded-md">
            {item.status}
          </span>
        </div>
        <h5 className="text-lg font-semibold text-slate-800">
          ${item.totalPrice}
        </h5>
      </div>
    </div>
  );
}

export default OrderItem;
