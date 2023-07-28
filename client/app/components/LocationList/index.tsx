"use client";
import { regions } from "@/app/utils/regions";
import { Modal } from "@/app/components";
import React from "react";
import { useUpdateUserInfoMutation } from "@/store/api/ecommerce";

function LocationList({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [updateUser] = useUpdateUserInfoMutation();
  return (
    <Modal setShow={setShow} title="Hududlar">
      {regions.map((region, i) => (
        <div className="w-full px-3 py-4 bg-gray-200 my-2" key={i}>
          {region}
        </div>
      ))}
    </Modal>
  );
}

export default LocationList;
