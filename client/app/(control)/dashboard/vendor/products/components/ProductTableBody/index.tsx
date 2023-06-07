"use client";
import { ProductType } from "@/types";
import { Dispatch, SetStateAction, useCallback } from "react";
import { TableBody } from "@/app/(control)/dashboard/vendor/components";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import Image from "next/image";
import { MenuButton } from "@/app/components";
import { useDeleteProductsByIdMutation } from "@/store/api/ecommerce";

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
  const [deleteProduct] = useDeleteProductsByIdMutation();
  const checkHandler = useCallback(() => {
    setSelected((prev: ProductType[]) =>
      prev.includes(product)
        ? prev.filter((e) => e._id !== product._id)
        : [...prev, product]
    );
  }, [product, setSelected]);
  return (
    <TableBody
      data={[
        <Checkbox onChange={checkHandler} key={1} checked={selected} />,
        <Image
          key={1}
          src={`http://localhost:4000/api/files/image/${product.images[0]}`}
          width={50}
          height={50}
          alt="Maxsulotning rasmi"
          unoptimized
        />,
        product.name,
        product.category[0],

        product.price,
        new Date(product.guarantee).toLocaleDateString(),
        <MenuButton key={1}>
          <p className="p-2 hover:bg-gray-300 rounded-md  z-20 bg-white">
            <i className="fa-solid fa-circle-info mr-2"></i>Haqida
          </p>
          <p className="p-2 hover:bg-gray-300 rounded-md  z-20 bg-white">
            <i className="fa-solid  fa-file-pen mr-2"></i>O'zgartirish
          </p>
          <p
            onClick={() => {
              deleteProduct({ id: product._id });
              refetch();
            }}
            className="p-2 hover:bg-gray-300 text-red-600 rounded-md  z-20 bg-white"
          >
            <i className="fa-solid  fa-trash mr-2"></i>O'chirish
          </p>
          <p className="p-2 hover:bg-gray-300 rounded-md text-gray-500 z-20 bg-white">
            <i className="fa-solid fa-box-archive mr-2"></i>Arxivga solish
          </p>
        </MenuButton>,
      ]}
    />
  );
}

export default ProductTableBody;
