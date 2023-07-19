import { Badge, Button, MenuButton, MenuItem } from "@components";
import Image from "next/image";
import { OrderChangeStatus, VendorWithOrders } from "@types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useChangeStatusMutation } from "@/store/api/ecommerce";

function Navbar({
  details: { vendor, orders },
  refetch,
}: {
  details: VendorWithOrders;
  refetch: any;
}) {
  const [changeOrderStatus] = useChangeStatusMutation();
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const changeStatus = useCallback(
    (body: OrderChangeStatus) => {
      changeOrderStatus(body);
      refetch();
    },
    [changeOrderStatus, refetch],
  );

  const pendingOrders = useMemo(
    () => orders.filter((e) => e.status === "pending"),
    [orders],
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
          {pendingOrders.length ? (
            pendingOrders.map((e, i) => (
              <MenuItem key={i}>
                <h4 className="text-slate-800 text-2xl font-semibold">
                  {e.productId.name}
                </h4>
                <p className="text-sm text-slate-600">Holati: {e.status}</p>
                <div className="flex flex-wrap h-16">
                  <Button
                    onClick={() =>
                      changeStatus({
                        _id: e._id,
                        status: "processing",
                      })
                    }
                  >
                    Qabul qilish
                  </Button>
                  <Button
                    onClick={() =>
                      changeStatus({
                        _id: e._id,
                        status: "rejected",
                      })
                    }
                  >
                    Rad etish
                  </Button>
                </div>
              </MenuItem>
            ))
          ) : (
            <MenuItem>
              <div className="py-4">Yangi buyurtma mavjud emas!</div>
            </MenuItem>
          )}
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
