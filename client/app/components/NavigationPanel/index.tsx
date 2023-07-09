"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface PanelPath {
  title: string;
  path: string;
  lastPath: string;
}

function NavigationPanel({
  homeLink,
  links,
  header,
}: {
  links: PanelPath[];
  homeLink: PanelPath;
  header: any;
}) {
  const pathname = usePathname();
  const lastPath = pathname.split("/").at(-1);
  return (
    <div className="min-w-[300px] leading-10 p-5">
      {header}
      <Link
        className={`py-2 px-3 text-gray-500  block my-4 ${
          lastPath === homeLink.lastPath && "bg-green-200 text-green-600"
        }`}
        href={homeLink.path}
      >
        <i className="fa-solid fa-house fa-bounce"></i> {homeLink.title}
      </Link>
      <p className="text-sm text-gray-500">Sozlamalar</p>
      <ul>
        {links.map((e, i) => (
          <li key={i} className="my-3">
            <Link
              className={`p-3 block text-gray-500 ${
                lastPath === e.lastPath && "bg-green-200 text-green-600"
              }`}
              href={e.path}
            >
              <i className="fa-solid fa-cart-shopping mx-1"></i>
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationPanel;
