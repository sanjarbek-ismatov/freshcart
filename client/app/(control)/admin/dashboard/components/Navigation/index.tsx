"use client";
import { LinkOfNavigation, Typography } from "@components";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  // const header = headers();
  // const path = header.get("x-url") || "";
  const lastPath = pathname.split("/").at(-1);
  return (
    <aside className="max-w-[300px]">
      <Typography size="lg" text="Navigatsiya" />
      <ul className="my-5">
        <li>
          <LinkOfNavigation
            href="/admin/dashboard"
            active={lastPath === "dashboard"}
          >
            <i className="fa-solid fa-home"></i> Bosh sahifa
          </LinkOfNavigation>
        </li>
        <li>
          <LinkOfNavigation
            href={"/admin/dashboard/site"}
            active={lastPath === "site"}
          >
            <i className="fa-solid fa-gear"></i> Sayt sozlamalari
          </LinkOfNavigation>
        </li>
      </ul>
    </aside>
  );
}

export default Navigation;
