import { Badge } from "@components";
import Image from "next/image";
import { VendorWithOrders } from "@types";
import { useMemo } from "react";

function Navbar({
  details: { vendor, orders },
}: {
  details: VendorWithOrders;
}) {
  const pendingOrders = useMemo(
    () => orders.filter((e) => e.status === "pending"),
    [orders]
  );

  return (
    <header className="flex justify-between h-16 w-full items-center">
      <p>Some component</p>
      <nav className="flex items-center">
        <Badge length={pendingOrders.length}>
          <i className="fa-solid fa-bell text-xl"></i>
        </Badge>
        <Image
          className="w-12 h-12 rounded-full ml-5"
          src={`http://localhost:4000/api/files/image/${vendor?.image}`}
          height={50}
          width={50}
          alt="Profile"
          unoptimized
        />
      </nav>
    </header>
  );
}

export default Navbar;
