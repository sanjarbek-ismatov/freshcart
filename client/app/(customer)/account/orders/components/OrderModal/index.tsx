import "./OrderModal.css";
import Image from "next/image";
import { OrderUsableType } from "@types";
import { Button, StatusBadge, Typography } from "@components";

function OrderModal({
  order: {
    productId: { images, name },
    vendorId: { name: vendorName, sells },
    slug,
    totalPrice,
    shippingAddress,
    paymentMethod,
    status,
  },
}: {
  order: OrderUsableType;
}) {
  return (
    <div className="w-full">
      <div className="flex">
        <div>
          <Image
            width={200}
            height={200}
            src={`http://localhost:4000/api/files/image/${images[0]}`}
            alt="Maxsulot rasmi"
            unoptimized
          />
        </div>
        <div>
          <Typography text={name} />
          <p className="text-sm text-slate-600">#{slug}</p>
          <StatusBadge status={status} />
          <div className="bg-slate-200 p-3 my-4">
            <p>
              <strong>Qiymati: </strong>${totalPrice}
            </p>
            <p>
              <strong>Manzil: </strong>
              {shippingAddress?.location}
            </p>
            <p>
              <strong>To'lov turi: </strong>
              {paymentMethod}
            </p>
            <p>
              <strong>Sotuvchi: </strong>
              {vendorName}({sells} savdo)
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>Maxsulotni qabul qildingizmi?</h1>
        <Button>Ha</Button>
        <Button>Yo'q hali</Button>
      </div>
    </div>
  );
}

export default OrderModal;
