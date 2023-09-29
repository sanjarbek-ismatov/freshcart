"use client";
import { LoadingModal, Typography } from "@components";
import Image from "next/image";
import { OrderChangeStatus, VendorWithOrders } from "@types";
import { useCallback, useEffect, useRef, useState } from "react";
import { useChangeStatusMutation } from "@/store/api/ecommerce";
import { useUrlContext } from "@/app/context";

function Navbar({
  details,
  isLoading,
  refetch,
}: {
  details?: VendorWithOrders;
  isLoading: boolean;
  refetch: any;
}) {
  const url = useUrlContext();
  const [changeOrderStatus] = useChangeStatusMutation();
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const changeStatus = useCallback(
    (body: OrderChangeStatus) => {
      changeOrderStatus(body).then(() => refetch());
    },
    [changeOrderStatus, refetch],
  );

  useEffect(() => {
    ref.current?.addEventListener("click", function () {
      setShow(!show);
    });
  }, [show]);
  const handleClick = useCallback(() => {
    ref.current?.click();
  }, []);
  return (
    <>
      <header className="flex justify-between h-16 w-full items-center border-b">
        <Typography size="md" text="Asboblar paneli" />
        <nav className="flex items-center">
          {/*{pendingOrders?.length ? (*/}
          {/*  pendingOrders?.map((e, i) => (*/}
          {/*    <MenuItem key={i}>*/}
          {/*      <h4 className="text-slate-800 text-2xl font-semibold">*/}
          {/*        {e.productId.name}*/}
          {/*      </h4>*/}
          {/*      <p className="text-sm text-slate-600">Holati: {e.status}</p>*/}
          {/*      <div className="flex flex-wrap h-16">*/}

          {/*      </div>*/}
          {/*    </MenuItem>*/}
          {/*  ))*/}
          {/*) : (*/}
          {/*  <MenuItem>*/}
          {/*    <div className="py-4">Yangi buyurtma mavjud emas!</div>*/}
          {/*  </MenuItem>*/}
          {/*)}*/}
          <Image
            className="w-12 h-12 rounded-full ml-5"
            src={`${url}/files/image/${details?.vendor?.image}`}
            height={50}
            width={50}
            alt="Profile"
            unoptimized
          />
        </nav>
      </header>
      {isLoading && <LoadingModal />}
    </>
  );
}

export default Navbar;
