"use client";
import { regions } from "@/app/utils/regions";
import { Modal } from "@/app/components";
import React from "react";
import { useUpdateUserInfoMutation } from "@/store/api/ecommerce";
import { useUserContext } from "@/app/context";

function LocationList({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [updateUser] = useUpdateUserInfoMutation();
  const { data } = useUserContext();

  function handleUpdate(state: string) {
    console.log("Im workig");
    updateUser({
      address: {
        state,
      },
    });
  }

  return (
    <Modal setShow={setShow} title="Hududlar">
      {regions.map((region, i) => (
        <div
          className={`w-full ${
            data?.user.address.state === region && "bg-gray-200"
          } cursor-pointer px-3 py-4 border hover:bg-gray-100 rounded my-2`}
          onClick={() => {
            handleUpdate(region);
          }}
          key={i}
        >
          {region}
        </div>
      ))}
    </Modal>
  );
}

export default LocationList;
