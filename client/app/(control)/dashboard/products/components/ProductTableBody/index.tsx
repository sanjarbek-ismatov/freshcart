"use client";
import { ProductType } from "@/types";
import { Dispatch, SetStateAction, useCallback } from "react";
import { TableBody } from "@components/dashboard";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import Image from "next/image";
import { MenuButton, MenuItem } from "@components";
import { useDeleteProductsByIdMutation } from "@/store/api/ecommerce";
import { useUrlContext } from "@/app/context";

function ProductTableBody({
  product,
  selected,
  refetch,
  setSelected,
}: {
  product: ProductType;
  selected: boolean;
  refetch: any;
  setSelected: Dispatch<SetStateAction<ProductType[]>>;
}) {
  const url = useUrlContext();
  const [deleteProduct] = useDeleteProductsByIdMutation();
  const checkHandler = useCallback(() => {
    setSelected((prev: ProductType[]) =>
      prev.includes(product)
        ? prev.filter((e) => e._id !== product._id)
        : [...prev, product],
    );
  }, [product, setSelected]);
  return (
    <TableBody
      data={[
        <Checkbox onChange={checkHandler} key={1} checked={selected} />,
        <Image
          key={1}
          src={`${url}/files/image/${product.images[0]}`}
          width={50}
          height={50}
          alt="Maxsulotning rasmi"
          unoptimized
        />,
        product.name,
        // product.category.name,
        product.price,
        new Date(product.guarantee).toLocaleDateString(),
        <MenuButton key={1}>
          <MenuItem>
            <i className="fa-solid fa-circle-info mr-2"></i>Haqida
          </MenuItem>
          <MenuItem>
            <i className="fa-solid  fa-file-pen mr-2"></i>O'zgartirish
          </MenuItem>
          <MenuItem
            onClick={() => {
              deleteProduct({ id: product._id });
              refetch();
            }}
          >
            <i className="fa-solid  fa-trash mr-2"></i>O'chirish
          </MenuItem>
          <MenuItem>
            <i className="fa-solid fa-box-archive mr-2"></i>Arxivga solish
          </MenuItem>
        </MenuButton>,
      ]}
    />
  );
}

export default ProductTableBody;
