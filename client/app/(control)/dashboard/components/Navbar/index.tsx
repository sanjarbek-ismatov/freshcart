import { Badge, Button, MenuButton, MenuItem } from "@components";
import Image from "next/image";
import { VendorWithOrders } from "@types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  const handleClick = useCallback(() => {
    ref.current?.click();
  }, []);
  return (
    <header className="flex justify-between h-16 w-full items-center">
      <p>Some component</p>
      <nav className="flex items-center">
        <MenuButton
          child={
            <Badge onClick={handleClick} length={pendingOrders.length}>
              <i className="fa-solid fa-bell text-xl"></i>
            </Badge>
          }
          defaultShow={show}
          isThereOwnIcon
          ref={ref}
        >
          {pendingOrders.map((e, i) => (
            <MenuItem key={i}>
              <h4 className="text-slate-800 text-2xl font-semibold">
                {e.productId.name}
              </h4>
              <p className="text-sm text-slate-600">Holati: {e.status}</p>
              <div className="flex flex-wrap h-16">
                <Button>Qabul qilish</Button>
                <Button>Rad etish</Button>
              </div>
            </MenuItem>
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
