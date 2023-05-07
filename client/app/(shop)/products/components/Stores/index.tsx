import { Input } from "@/app/components";
import "./Stores.css";
import Checkbox from "../Checkbox";
import { VendorType } from "@/types";

function Stores({ vendors }: { vendors: VendorType[] }) {
  return (
    <>
      <div className="my-4 leading-7">
        <h1 className="font-semibold text-lg">Do`konlar</h1>
        <Input placeholder="Do'kon nomini yozing" />
        {vendors.map((e, i) => (
          <Checkbox key={i} checked={false}>
            {e.name}
          </Checkbox>
        ))}
      </div>
    </>
  );
}

export default Stores;
