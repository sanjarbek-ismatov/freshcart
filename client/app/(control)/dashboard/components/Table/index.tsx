import "./Table.css";
import { ReactNode } from "react";

function Table({ children }: { children: ReactNode }) {
  return (
    <table className="w-full bg-white border border-gray-300">{children}</table>
  );
}

export default Table;
