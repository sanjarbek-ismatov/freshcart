import { Input } from "@/app/components";
import "./Stores.css";
import Checkbox from "../Checkbox";
function Stores() {
  return (
    <>
      <div className="">
        <h1>Do`konlar</h1>
        <Input placeholder="Do'kon nomini yozing" />
        <Checkbox checked={false} />
      </div>
    </>
  );
}
export default Stores;
