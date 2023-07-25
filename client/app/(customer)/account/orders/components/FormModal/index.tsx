import "./FormModal.css";
import { useAcceptOrderMutation } from "@/store/api/ecommerce";
import { useCallback, useState } from "react";
import Image from "next/image";
import FormParser from "@/app/utils/formParser";
import { Input, ReviewStars, TextArea } from "@components";
import { useParsedUrlData } from "@/app/hooks/useParsedUrlData";
import { OrderUsableType } from "@types";
import ImageIcon from "public/images/image.svg";

function FormModal({
  order,
  refetch,
}: {
  order: Pick<OrderUsableType, "_id" | "vendorId">;
  refetch: any;
}) {
  const [acceptOrder] = useAcceptOrderMutation();
  const [handleSubmitImage, images] = useParsedUrlData();
  const [star, setStar] = useState(0);
  const formParser = new FormParser();
  const handleSubmitReview = useCallback(() => {
    formParser.getFormAsFormData.append("vendorId", order.vendorId._id);
    formParser.getFormAsFormData.append("orderId", order._id);
    formParser.getFormAsFormData.append("status", "finished");
    formParser.getFormAsFormData.append("star", star.toString());
    acceptOrder(formParser.getFormAsFormData).then(() => refetch());
  }, [acceptOrder, formParser.getFormAsFormData, order, refetch, star]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formParser.setForm(e);
        handleSubmitReview();
      }}
      encType="multipart/form-data"
    >
      <label>
        <input
          multiple
          accept="image/*"
          type="file"
          name="images"
          onChange={handleSubmitImage}
          hidden
        />
        <div className="text-center py-3 border border-b-0">
          <Image
            className="mx-auto h-20"
            src={ImageIcon}
            alt="Faylni joylash"
          />
          <p className="text-slate-600 text-sm">Rasmlarni joylashtiring</p>
        </div>
      </label>
      <div className="flex border pb-3 border-t-0">
        {images[0] &&
          images?.map((e, i) => (
            <Image
              className="object-cover w-[100px] h-[100px] m-2"
              key={i}
              src={e}
              width={50}
              height={50}
              alt="Skrinshot"
              unoptimized
            />
          ))}
      </div>
      <TextArea label="Izoh" name="description" />
      <ReviewStars star={star} setStar={setStar} />
      <Input type="submit" value="Jo'natish" />
    </form>
  );
}

export default FormModal;
