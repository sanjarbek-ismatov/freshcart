import "./OrderItem.css";
import { OrderType, ProductType, VendorType } from "@types";
import Image from "next/image";

function OrderItem({ item }: { item: OrderType<ProductType, VendorType> }) {
  return (
    <div className="w-full">
      <div>
        <Image
          width={50}
          height={50}
          src={`http://localhost:4000/api/files/image/${item.productId.images[0]}`}
          alt="Order"
          unoptimized
        />
      </div>
      <div>
        <h4>{item.productId.name}</h4>
      </div>
    </div>
  );
}

export default OrderItem;
