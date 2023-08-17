import "./FourGridComponent.css";
import { ReactNode } from "react";

function FourGridComponent({ children }: { children: ReactNode }) {
  return (
    <div className="grid my-24 gap-x-6 grid-cols-1 grid-rows-4 mx-20  sm:grid-cols-2 sm:grid-rows-2 lg:mx-12 lg:grid-cols-4 lg:grid-rows-1">
      {children}
    </div>
  );
}

export default FourGridComponent;
