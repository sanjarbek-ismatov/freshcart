"use client";
import type { CheckoutProduct, UserType } from "@types";
import { OrderType } from "@types";
import { useCallback, useMemo } from "react";
import { Button } from "@components";
import { useAddOrderMutation } from "@/store/api/ecommerce";

function AddressDetails({
  user,
  state,
}: {
  user?: UserType;
  state: CheckoutProduct[];
}) {
  const [addOrder] = useAddOrderMutation();
  const sum = useMemo(() => {
    if (state.length) {
      return state.reduce(
        (acc, curr) => (acc += +curr.count * curr.id.price),
        0,
      );
    }
  }, [state]);

  const submitPay = useCallback(() => {
    state.forEach(({ id: { _id, vendor }, count }, i) => {
      const body: Omit<
        OrderType<string, string>,
        "slug" | "clientId" | "date" | "_id"
      > = {
        productId: _id,
        vendorId: vendor._id,
        count,
        totalPrice: sum || 0,
        status: "pending",
        shippingAddress: user?.address,
        billingAddress: vendor.address,
        paymentMethod: "naqd",
        orderNotes: "bla bla",
      };

      addOrder(body);
    });
  }, [addOrder, state, sum, user?.address]);
  return (
    <div className="min-w-[200px] border text-center">
      <h1>Malumotlar</h1>
      Jami summa: <span>{sum}$</span> ({state.length}ta maxsulot)
      <h1>Manzil: </h1>
      <p>
        {user?.address.state}, {user?.address.location}
      </p>
      <Button onClick={submitPay}>Sotib olish</Button>
    </div>
  );
}

export default AddressDetails;
