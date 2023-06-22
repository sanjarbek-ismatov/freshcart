"use client";
import { Table, TableHead } from "@components/dashboard";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { BreadCrumb, MenuButton, Typography } from "@components";
import { useState } from "react";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { ProductType } from "@types";
import { AddressDetails } from "@/app/(customer)/account/checkout/components";
import { useAppSelector } from "@/store/store";

function CheckoutPage() {
  const state = useAppSelector((state1) => state1.checkout);
  const { data, refetch } = useGetUserInfoQuery();
  const [allAreCheck, setAllAreCheck] = useState(false);
  const [selected, setSelected] = useState<ProductType[]>([]);
  return (
    <>
      <BreadCrumb
        path={[
          { title: "Uy", path: "/" },
          { title: "Hisob", path: "/account" },
          {
            title: "Savatcha",
            path: "/account/checkout",
          },
        ]}
      />

      <Typography text="Savatcha" />
      <div className="flex">
        <Table>
          <TableHead
            data={[
              <Checkbox
                key={1}
                checked={allAreCheck}
                onChange={() => setAllAreCheck(!allAreCheck)}
              />,
              "Rasmi",
              "Nomi",
              "Kategoriyasi",

              "Qiymati",
              "Sanasi",
              <MenuButton key={1}>
                <p className="p-2 hover:bg-gray-300 text-red-600 rounded-md  z-20 bg-white">
                  <i className="fa-solid  fa-trash mr-2"></i>O'chirish
                </p>
                <p className="p-2 hover:bg-gray-300 rounded-md text-gray-500 z-20 bg-white">
                  <i className="fa-solid fa-box-archive mr-2"></i>Arxivga solish
                </p>
              </MenuButton>,
            ]}
          ></TableHead>
          {data?.cart.map((e, i) => (
            <p key={i}></p>
          ))}
        </Table>
        <AddressDetails user={data} />
      </div>
    </>
  );
}

export default CheckoutPage;
