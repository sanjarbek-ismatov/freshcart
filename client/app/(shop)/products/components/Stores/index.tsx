import { Input } from "@/app/components";
import "./Stores.css";
import Checkbox from "../Checkbox";
function Stores() {
  return (
    <>
      <div className="my-4 leading-7">
        <h1 className="font-semibold text-lg">Do`konlar</h1>
        <Input placeholder="Do'kon nomini yozing" />
        <Checkbox checked={false}>Ustore</Checkbox>
      </div>
    </>
  );
}
export default Stores;
