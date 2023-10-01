"use client";
import type { CheckoutProduct, UserType } from "@types";
import { OrderType } from "@types";
import { useCallback, useMemo } from "react";
import { Button, LoadingModal, Typography } from "@components";
import { useAddOrderMutation } from "@/store/api/ecommerce";

function AddressDetails({
  user,
  refetch,
  state,
}: {
  user?: UserType;
  state: CheckoutProduct[];
  refetch: any;
}) {
  const [addOrder, { isLoading }] = useAddOrderMutation();
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

      addOrder(body).then(() => refetch());
    });
  }, [addOrder, state, sum, user?.address]);
  return (
    <>
      <div className="min-w-[200px] w-full sm:w-auto p-3 border text-center">
        <Typography text="Malumotlar" size="md" />
        Jami summa: <span>{sum || 0}$</span> ({state.length}ta maxsulot)
        <h1>Manzil: </h1>
        <p>
          {user && user?.address ? (
            `${user?.address?.state}, ${user?.address?.location}`
          ) : (
            <span className="text-red-400">
              Iltimos joylashuvni sozlamalar orqali yangilang
            </span>
          )}
        </p>
        <Button onClick={submitPay} disabled={!user?.address}>
          Sotib olish
        </Button>
      </div>
      {isLoading && <LoadingModal />}
    </>
  );
}

export default AddressDetails;
