"use client";
import { Input } from "@/app/components";
import "./Stores.css";
import Checkbox from "../Checkbox";
import { VendorType } from "@/types";
import { useAppSelector, vendorDispatch } from "@/store/store";

function Stores({ vendors }: { vendors: VendorType[] }) {
  const state = useAppSelector((state) => state.filter);
  return (
    <>
      <div className="my-4 leading-7">
        <h1 className="font-semibold text-lg">Do`konlar</h1>
        <Input placeholder="Do'kon nomini yozing" />
        {vendors.map((e, i) => (
          <Checkbox
            key={i}
            onClick={() => vendorDispatch(e.name)}
            checked={state.vendors.includes(e.name)}
          >
            {e.name}
          </Checkbox>
        ))}
      </div>
    </>
  );
}

export default Stores;
