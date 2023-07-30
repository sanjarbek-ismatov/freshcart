"use client";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";
import { Table, TableHead } from "@components/dashboard";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { useCallback, useMemo } from "react";
import { ProductTableBody } from "@/app/(control)/dashboard/products/components";
import { MenuButton } from "@/app/components";
import { MenuItem } from "@components";
import { setProductState, useAppSelector } from "@/store/store";
import { Filter } from "@/app/utils/filter";

function ProductsList({ query }: { query: string }) {
  const { data, refetch, isSuccess } = useGetControllerInfoQuery();
  const state = useAppSelector((state) => state.productFilter);
  const allAreCheck = useMemo(
    () => state.length === data?.vendor.products.length,
    [data?.vendor.products.length, state.length],
  );
  const filter = useMemo(() => new Filter(setProductState), []);
  const handleCheck = useCallback(() => {
    filter.selectAll(data?.vendor.products);
  }, [data?.vendor.products, filter]);
  return (
    <Table>
      <TableHead
        data={[
          <Checkbox key={1} checked={allAreCheck} onChange={handleCheck} />,
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
        {data?.vendor.products
          ?.filter((e) => e.name.toUpperCase().includes(query.toUpperCase()))
          .map((e, i) => (
            <ProductTableBody
              filter={filter}
              checked={
                state.findIndex((product) => product.slug === e.slug) !== -1
              }
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
