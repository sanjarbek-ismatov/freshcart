import "./Navigation.css";
import { Typography } from "@components";
import Link from "next/link";
import { headers } from "next/headers";

function Navigation() {
  const header = headers();
  const path = header.get("x-url") || "";
  const lastPath = path.split("/").at(-1);
  return (
    <aside className="max-w-[300px]">
      <Typography size="lg" text="Navigatsiya" />
      <ul className="my-5">
        <li>
          <Link
            href="/admin/dashboard"
            className={`p-4 pr-20 my-4 rounded-md block ${
              lastPath === "dashboard" ? "bg-gray-100" : ""
            }  hover:bg-gray-200`}
          >
            <i className="fa-solid fa-gear"></i> Bosh sahifa
          </Link>
        </li>
        <li>
          <Link
            href="/admin/dashboard/site"
            className={`p-4 pr-20 my-2 block rounded-md ${
              lastPath === "site" ? "bg-gray-100" : ""
            }  hover:bg-gray-200`}
          >
            <i className="fa-solid fa-gear"></i> Sayt sozlamalari
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Navigation;
