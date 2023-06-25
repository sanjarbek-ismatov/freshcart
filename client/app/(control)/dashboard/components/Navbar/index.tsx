import { Badge, MenuButton } from "@components";
import Image from "next/image";
import { VendorWithOrders } from "@types";
import { useEffect, useMemo, useRef, useState } from "react";

function Navbar({
  details: { vendor, orders },
}: {
  details: VendorWithOrders;
}) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const pendingOrders = useMemo(
    () => orders.filter((e) => e.status === "pending"),
    [orders]
  );
  useEffect(() => {
    ref.current?.addEventListener("click", function (e) {
      setShow(!show);
    });
  }, [show]);

  return (
    <header className="flex justify-between h-16 w-full items-center">
      <p>Some component</p>
      <nav className="flex items-center">
        <Badge length={pendingOrders.length}>
          <i className="fa-solid fa-bell text-xl"></i>
        </Badge>
        <MenuButton isThereOwnIcon ref={ref}>
          {pendingOrders.map((e, i) => (
            <p key={i}>{e.status}</p>
          ))}
        </MenuButton>
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
