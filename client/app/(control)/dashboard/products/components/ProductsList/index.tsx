"use client";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";
import { Table, TableHead } from "@components/dashboard";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { ProductType } from "@/types";
import { useEffect, useState } from "react";
import { ProductTableBody } from "@/app/(control)/dashboard/products/components";
import { MenuButton } from "@/app/components";
import { MenuItem } from "@components";

function ProductsList({ query }: { query: string }) {
  const [selected, setSelected] = useState<ProductType[]>([]);
  const [allAreCheck, setAllAreCheck] = useState(false);
  const { data, refetch, isSuccess } = useGetControllerInfoQuery();
  useEffect(() => {
    data && allAreCheck ? setSelected(data?.vendor.products) : setSelected([]);
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
            <MenuItem>
              <i className="fa-solid  fa-trash mr-2"></i>O'chirish
            </MenuItem>
            <MenuItem>
              <i className="fa-solid fa-box-archive mr-2"></i>Arxivga solish
            </MenuItem>
          </MenuButton>,
        ]}
      />
      <tbody>
        {
          data?.vendor.products
            ?.filter((e) => e.name.toUpperCase().includes(query.toUpperCase()))
            .map((e, i) => (
              <ProductTableBody
                selected={selected.includes(e)}
                setSelected={setSelected}
                refetch={refetch}
                key={i}
                product={e}
              />
            ))

          //     : (
          //   <td colSpan={7}>
          //     <p className="text-center p-3">Maxsulotlar yo'q shekilli</p>
          //   </td>
          // )
        }
      </tbody>
    </Table>
  );
}

export default ProductsList;
