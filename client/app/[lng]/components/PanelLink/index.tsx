import "./PanelLink.css";
import Link from "next/link";

function PanelLink({
  lastPath,
  href,
  icon,
  title,
}: {
  lastPath?: string;
  href: string;
  icon?: string;
  title: string;
}) {
  return (
    <Link
      className={`py-2 px-3 text-gray-500 w-[300px] block my-4 ${
        lastPath === "dashboard" && "bg-green-200 text-green-600"
      }`}
      href={href}
    >
      <i className={icon}></i>{" "}
      <span className="opacity-0 break-normal group-hover:opacity-100">
        {title}
      </span>
    </Link>
  );
}

export default PanelLink;