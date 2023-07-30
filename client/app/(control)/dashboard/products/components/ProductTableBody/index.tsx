"use client";
import { ProductType } from "@/types";
import { TableBody } from "@components/dashboard";
import Image from "next/image";
import { MenuButton, MenuItem } from "@components";
import { useDeleteProductsByIdMutation } from "@/store/api/ecommerce";
import { useUrlContext } from "@/app/context";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";

function ProductTableBody({
  product,
  refetch,
  filter,
  checked,
}: {
  product: ProductType;
  filter: any;
  refetch: any;
  checked: boolean;
}) {
  const url = useUrlContext();
  const [deleteProduct] = useDeleteProductsByIdMutation();

  return (
    <TableBody
      data={[
        <Checkbox
          onChange={() => filter.select(product, "product")}
          key={1}
          checked={checked}
        />,
        <Image
          key={1}
          src={`${url}/files/image/${product.images[0]}`}
          width={50}
          height={50}
          alt="Maxsulotning rasmi"
          unoptimized
        />,
        product.name,
        product.category.name,
        product.price,
        new Date(
          product.date ? product.date : "2023-06-07T00:00:00",
        ).toLocaleDateString(),
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
