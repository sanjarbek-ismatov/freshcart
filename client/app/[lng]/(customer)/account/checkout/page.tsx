"use client";
import { Table, TableBody, TableHead } from "@components/dashboard";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { LoadingPage, MenuButton, Typography } from "@components";
import { useCallback, useMemo } from "react";
import { setCheckoutState, useAppSelector } from "@/store/store";
import Image from "next/image";
import { Filter } from "@/app/utils/filter";
import { AddressDetails } from "@/app/(customer)/account/checkout/components";
import { useUrlContext, useUserContext } from "@/app/context";

function CheckoutPage() {
  const url = useUrlContext();
  const state = useAppSelector((state1) => state1.checkoutFilter);
  const { data, isLoading, refetch } = useUserContext();
  const allAreChecked = useMemo(
    () => state.length === data?.user.cart.length,
    [data?.user.cart.length, state.length],
  );
  const filter = useMemo(() => new Filter(setCheckoutState), []);

  const handleCheck = useCallback(() => {
    filter.selectAll(data?.user.cart);
  }, [data?.user.cart, filter]);
  return (
    <div className="w-full">
      {/*<BreadCrumb*/}
      {/*  path={[*/}
      {/*    { title: "Uy", path: "/" },*/}
      {/*    { title: "Hisob", path: "/account" },*/}
      {/*    {*/}
      {/*      title: "Savatcha",*/}
      {/*      path: "/account/checkout",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}

      <Typography text="Savatcha" />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex">
          <Table>
            <TableHead
              data={[
                <Checkbox
                  key={1}
                  checked={allAreChecked}
                  onChange={handleCheck}
                />,
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
            {data?.user.cart.length ? (
              data?.user.cart.map(
                ({ id: { name, images, category, price }, count }, i) => (
                  <TableBody
                    key={i}
                    data={[
                      <Checkbox
                        key={i}
                        checked={
                          !!state.find(
                            (e) =>
                              e && data?.user.cart[i].id.slug === e.id.slug,
                          )
                        }
                        onChange={() =>
                          filter.select(data?.user.cart[i], "checkout")
                        }
                      />,
                      <Image
                        key={i}
                        src={`${url}/files/image/${images[0]}`}
                        width={50}
                        height={50}
                        alt="Maxsulotning rasmi"
                        unoptimized
                      />,
                      name,
                      category.name,
                      price,
                      count,
                      <MenuButton key={i}>
                        <p className="p-2 hover:bg-gray-300 text-red-600 rounded-md  z-20 bg-white">
                          <i className="fa-solid  fa-trash mr-2"></i>O'chirish
                        </p>
                      </MenuButton>,
                    ]}
                  />
                ),
              )
            ) : (
              <TableBody
                colspan={10}
                data={[
                  <h1 className="text-center" key={1}>
                    Savatcha bo'sh
                  </h1>,
                ]}
              />
            )}
          </Table>
          <AddressDetails refetch={refetch} state={state} user={data?.user} />
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
