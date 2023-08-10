import "./OrderModal.css";
import Image from "next/image";
import { OrderUsableType } from "@types";
import { Button, Modal, StatusBadge, Typography } from "@components";
import React, { useState } from "react";
import { FormModal } from "@/app/(customer)/account/orders/components";
import { useUrlContext } from "@/app/context";

function OrderModal({
  order: {
    _id,
    productId,
    vendorId,
    slug,
    totalPrice,
    shippingAddress,
    paymentMethod,
    status,
  },
  setSelected,
  refetch,
}: {
  order: OrderUsableType;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  refetch: any;
}) {
  const url = useUrlContext();
  const [show, setShow] = useState(false);
  return (
    <>
      {show && (
        <Modal setShow={setShow} title="Izoh yuborish">
          <FormModal
            setSelected={setSelected}
            order={{ _id, vendorId }}
            refetch={refetch}
          />
        </Modal>
      )}
      <div className="w-full">
        <div className="flex">
          <div className="mx-4">
            <Image
              width={200}
              height={200}
              src={`${url}/files/image/${productId.images[0]}`}
              alt="Maxsulot rasmi"
              unoptimized
            />
          </div>
          <div>
            <Typography text={productId.name} />
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
                {vendorId.name}({vendorId.sells} savdo)
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
              <Button onClick={() => setShow(true)}>Ha</Button>
              <Button>Yo'q hali</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderModal;
