"use client";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";
import { Table, TableHead } from "@/app/(control)/dashboard/vendor/components";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { ProductType } from "@/types";
import { useEffect, useState } from "react";
import { ProductTableBody } from "@/app/(control)/dashboard/vendor/products/components";
import { MenuButton } from "@/app/components";

function ProductsList({ query }: { query: string }) {
  const [selected, setSelected] = useState<ProductType[]>([]);
  const [allAreCheck, setAllAreCheck] = useState(false);
  const { isLoading, data } = useGetControllerInfoQuery();
  useEffect(() => {
    data && allAreCheck ? setSelected(data?.products) : setSelected([]);
  }, [allAreCheck, data]);
  return (
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
      />
      <tbody>
        {data?.products
          ?.filter((e) => e.name.toUpperCase().includes(query.toUpperCase()))
          .map((e, i) => (
            <ProductTableBody
              selected={selected.includes(e)}
              setSelected={setSelected}
              key={i}
              product={e}
            />
          ))}
      </tbody>
    </Table>
  );
}

export default ProductsList;
