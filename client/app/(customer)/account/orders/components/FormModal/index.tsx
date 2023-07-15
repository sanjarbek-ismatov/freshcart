import "./FormModal.css";
import { useAcceptOrderMutation } from "@/store/api/ecommerce";
import { useCallback } from "react";

function FormModal({ id, refetch }: { id: string; refetch: any }) {
  const [acceptOrder] = useAcceptOrderMutation();
  const handleSubmitStatus = useCallback(() => {
    acceptOrder({
      id,
      status: "finished",
    }).then(() => refetch());
  }, [id, acceptOrder, refetch]);
  return (
    <>
      <p>Hello, FormModal</p>
    </>
  );
}

export default FormModal;
