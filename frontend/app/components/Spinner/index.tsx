import { HTMLAttributes } from "react";
import "./Spinner.css";
function Spinner({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div {...rest} className="relative w-8 h-8">
        <span className="border-2 w-8 h-8 border-transparent rounded-full border-t-green-500 spinner-1 absolute"></span>
        <span className="border-2 w-8 h-8 rounded-full border-t-green-500 spinner-2 absolute border-transparent"></span>
        <span className="border-2 w-8 h-8 rounded-full border-t-green-500 spinner-3 absolute border-transparent"></span>
      </div>
    </>
  );
}
export default Spinner;
