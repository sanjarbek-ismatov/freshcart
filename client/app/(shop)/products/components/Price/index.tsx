import { Input } from "@/app/components";
import "./Price.css";
function Price() {
  return (
    <>
      <div className="leading-7">
        <h1 className="font-semibold text-lg">Narx oralig`i</h1>
        <div className="flex">
          <Input min="0" placeholder="0" type="number" />
          <Input min="0" placeholder="9999+" type="number" />
        </div>
      </div>
    </>
  );
}
export default Price;
