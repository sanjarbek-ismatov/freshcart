import "./StatusBadge.css";
import { Status } from "@types";

function StatusBadge(props: { status: Status }) {
  return (
    <span className="bg-green-600 text-[12px]  text-white  p-1 rounded-md">
      {props.status}
    </span>
  );
}

export default StatusBadge;
