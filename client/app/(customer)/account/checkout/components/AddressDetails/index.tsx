"use client";
import type { User } from "@types";
import { useMemo } from "react";
import { CheckoutProduct } from "@/store/reducers/checkout";

function AddressDetails({
  user,
  state,
}: {
  user?: User;
  state: CheckoutProduct[];
}) {
  const sum = useMemo(
    () => state.reduce((acc, curr) => (acc += +curr.count * curr.id.price), 0),
    [state]
  );
  return (
    <div className="min-w-[200px] border text-center">
      <h1>Malumotlar</h1>
      Jami summa: <span>{sum}$</span> ({state.length}ta maxsulot)
      <h1>Manzil: </h1>
      <p>
        {user?.address.state}, {user?.address.location}
      </p>
    </div>
  );
}

export default AddressDetails;
