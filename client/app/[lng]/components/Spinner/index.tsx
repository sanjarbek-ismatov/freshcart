import { ComponentProps } from "react";
import "./Spinner.css";

function Spinner({
  size = "w-8 h-8",
  ...rest
}: { size?: string } & ComponentProps<"div">) {
  return (
    <>
      <div {...rest} className={`relative ${size}`}>
        <span
          className={`border-2 ${size} border-transparent rounded-full border-t-green-500 spinner-1 absolute`}
        ></span>
        <span
          className={`border-2 ${size} rounded-full border-t-green-500 spinner-2 absolute border-transparent`}
        ></span>
        <span
          className={`border-2 ${size} rounded-full border-t-green-500 spinner-3 absolute border-transparent`}
        ></span>
      </div>
    </>
  );
}

export default Spinner;
