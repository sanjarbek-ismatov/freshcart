"use client";
import type { User } from "@types";
import { useAppSelector } from "@/store/store";
import { useMemo } from "react";

function AddressDetails({ user }: { user?: User }) {
  const state = useAppSelector((state) => state.checkout);
  const sum = useMemo(
    () => state.reduce((acc, curr) => (acc += +curr.count * curr.id.price), 0),
    [state]
  );
  return (
    <div>
      <h1>Malumotlar</h1>
      Jami summa: <span>{sum}$</span>
    </div>
  );
}

export default AddressDetails;
