import "./FormModal.css";
import { useAcceptOrderMutation } from "@/store/api/ecommerce";
import { useCallback } from "react";
import Image from "next/image";
import FormParser from "@/app/utils/formParser";
import { Input } from "@components";
import { useParsedUrlData } from "@/app/hooks/useParsedUrlData";

function FormModal({ id, refetch }: { id: string; refetch: any }) {
  const [acceptOrder] = useAcceptOrderMutation();
  const handleSubmitStatus = useCallback(() => {
    acceptOrder({
      id,
      status: "finished",
    }).then(() => refetch());
  }, [id, acceptOrder, refetch]);
  const [handleSubmitImage, images] = useParsedUrlData();
  const formParser = new FormParser();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formParser.setForm(e);
      }}
      encType="multipart/form-data"
    >
      <Input
        multiple
        accept="image/*"
        type="file"
        name="images"
        onChange={handleSubmitImage}
        label="Rasmlar"
      />
      <div className="flex">
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
      <Input type="text" label="Izoh" name="description" />
      <Input type="number" label="Qanday baholaysiz?" name="star" />
      <Input type="submit" value="Jo'natish" />
    </form>
  );
}

export default FormModal;
