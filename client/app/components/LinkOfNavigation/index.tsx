import "./LinkOfNavigation.css";
import { ReactNode } from "react";
import Link from "next/link";

function LinkOfNavigation({
  active,
  href,
  children,
}: {
  active: boolean;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`p-4 pr-20 my-2 block rounded-md ${
        active ? "bg-gray-100" : ""
      }  hover:bg-gray-200`}
    >
      {children}
    </Link>
  );
}

export default LinkOfNavigation;
