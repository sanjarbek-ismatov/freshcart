"use client";
import { Table, TableBody, TableHead } from "@components/dashboard";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { BreadCrumb, MenuButton, Typography } from "@components";
import { useCallback, useEffect, useState } from "react";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { AddressDetails } from "@/app/(customer)/account/checkout/components";
import { setState, useAppSelector } from "@/store/store";
import Image from "next/image";
import { Filter } from "@/app/utils/filter";
import { CheckoutProduct } from "@/store/reducers/checkout";

function CheckoutPage() {
  const state = useAppSelector((state1) => state1.checkout);
  const { data, refetch } = useGetUserInfoQuery();

  const [allAreCheck, setAllAreCheck] = useState(false);
  const filter = new Filter<CheckoutProduct>(data?.cart || []);
  useEffect(() => {
    if (data && allAreCheck) filter.selectAll(data?.cart);
  }, [allAreCheck, data, filter]);
  useEffect(() => {
    setAllAreCheck(state.length === data?.cart.length);
  }, [data?.cart.length, state.length]);
  const handleCheck = useCallback(() => {
    setAllAreCheck(!allAreCheck);
    allAreCheck && filter.reset();
  }, [allAreCheck, filter]);
  console.log(filter.state);
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
              <Checkbox key={1} checked={allAreCheck} onChange={handleCheck} />,
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
          ></TableHead>
          {data?.cart.map(
            ({ id: { name, images, category, price }, count }, i) => (
              <TableBody
                key={i}
                data={[
                  <Checkbox
                    key={i}
                    checked={
                      !!state.find((e) => data?.cart[i].id.slug === e.id.slug)
                    }
                    onChange={() => filter.select(data?.cart[i])}
                  />,
                  <Image
                    key={i}
                    src={`http://localhost:4000/api/files/image/${images[0]}`}
                    width={50}
                    height={50}
                    alt="Maxsulotning rasmi"
                    unoptimized
                  />,
                  name,
                  category[0],
                  price,
                  count,
                  <MenuButton key={i}>
                    <p className="p-2 hover:bg-gray-300 text-red-600 rounded-md  z-20 bg-white">
                      <i className="fa-solid  fa-trash mr-2"></i>O'chirish
                    </p>
                  </MenuButton>,
                ]}
              />
            )
          )}
        </Table>
        <AddressDetails state={state} user={data} />
      </div>
    </>
  );
}

export default CheckoutPage;
