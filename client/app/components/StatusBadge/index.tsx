import "./StatusBadge.css";
import { Status } from "@types";
import { useMemo } from "react";

function StatusBadge(props: { status: Status }) {
  const color = useMemo(() => {
    switch (props.status) {
      case "finished":
        return "bg-green-600";
      case "pending":
        return "bg-yellow-600";
      case "processing":
        return "bg-blue-600";
      case "rejected":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  }, [props.status]);
  return (
    <span className={`${color} text-[12px]  text-white  p-1 rounded-md`}>
      {props.status}
    </span>
  );
}

export default StatusBadge;
