"use client";
import { Table, TableBody, TableHead } from "@components/dashboard";
import "./OrderList.css";
import { MenuButton } from "@components";
// import { setState, useAppSelector } from "@/store/store";
import { VendorWithOrders } from "@types";
// import { useCallback, useMemo } from "react";
// import { Filter } from "@/app/utils/filter";

function OrderList({ data }: { data?: VendorWithOrders }) {
  // const state = useAppSelector((state) => state.controlCheckoutFilter);
  // const filter = useMemo(() => new Filter(setState), []);
  //
  // const allAreChecked = useMemo(
  //   () => state.length === data?.orders.length,
  //   [data, state.length]
  // );
  // const handleCheck = useCallback(() => {
  //   filter.selectAll(data?.orders);
  // }, [data, filter]);
  return (
    <Table>
      <TableHead
        data={[
          // <Checkbox key={1} checked={allAreChecked} onChange={handleCheck} />,
          "Rasmi",
          "Nomi",
          "Kategoriyasi",

          "Qiymati",
          "Soni",
          <MenuButton key={1}>
            <p className="p-2 hover:bg-gray-300 text-red-600 rounded-md  z-20 bg-white">
              <i className="fa-solid  fa-trash mr-2"></i>O'chirish
            </p>
          </MenuButton>,
        ]}
      />
      <TableBody
        data={[
          // <Checkbox key={1} checked={allAreChecked} onChange={handleCheck} />,
          "Rasmi",
          "Nomi",
          "Kategoriyasi",

          "Qiymati",
          "Soni",
          <MenuButton key={1}>
            <p className="p-2 hover:bg-gray-300 text-red-600 rounded-md  z-20 bg-white">
              <i className="fa-solid  fa-trash mr-2"></i>O'chirish
            </p>
          </MenuButton>,
        ]}
      />
    </Table>
  );
}

export default OrderList;
