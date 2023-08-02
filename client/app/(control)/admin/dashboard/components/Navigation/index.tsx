import "./Navigation.css";
import { Typography } from "@components";
import Link from "next/link";

function Navigation() {
  return (
    <aside className="border">
      <Typography size="lg" text="Navigatsiya" />
      <ul className="my-5">
        <li>
          <Link href="/admin/dashboard/site" className="py-4 my-2">
            <i className="fa-solid fa-gear"></i> Sayt sozlamalari
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Navigation;
