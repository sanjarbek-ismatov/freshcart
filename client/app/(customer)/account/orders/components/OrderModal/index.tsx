import "./OrderModal.css";
import Image from "next/image";
import { OrderUsableType } from "@types";
import { Button, StatusBadge, Typography } from "@components";

function OrderModal({
  order: {
    _id,
    productId: { images, name },
    vendorId: { name: vendorName, sells },
    slug,
    totalPrice,
    shippingAddress,
    paymentMethod,
    status,
  },
  refetch,
}: {
  order: OrderUsableType;
  refetch: any;
}) {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="mx-4">
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

      {status === "processing" && (
        <div>
          <h1 className="text-center text-xl font-semibold">
            Maxsulotni qabul qildingizmi?
          </h1>
          <div className="flex mx-auto justify-between w-4/6">
            <Button>Ha</Button>
            <Button>Yo'q hali</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderModal;
