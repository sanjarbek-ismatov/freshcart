"use client";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";
import {
  Table,
  TableBody,
  TableHead,
} from "@/app/(control)/dashboard/vendor/components";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import Image from "next/image";
import { ProductType } from "@/types";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

function ProductTableBody({
  product,
  checked,
  setChecked,
}: {
  product: ProductType;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<any>>;
}) {
  const checkHandler = useCallback(() => {
    setChecked((prev: ProductType[]) =>
      prev.includes(product)
        ? prev.filter((e) => e._id !== product._id)
        : [...prev, product]
    );
  }, [product, setChecked]);
  return (
    <TableBody
      data={[
        <Checkbox onChange={checkHandler} key={1} checked={checked} />,
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
        new Date(product.dateOfManufacture).toLocaleDateString(),
        <i key={1} className="fa-solid fa-ellipsis-vertical"></i>,
      ]}
    />
  );
}

function ProductsList() {
  const [checked, setChecked] = useState<ProductType[]>([]);
  const { isLoading, data } = useGetControllerInfoQuery();

  return (
    <Table>
      <TableHead
        data={[
          <Checkbox key={1} checked={false} />,
          "Rasmi",
          "Nomi",
          "Kategoriyasi",

          "Qiymati",
          "Sanasi",
          <i key={1} className="fa-solid fa-ellipsis-vertical"></i>,
        ]}
      />
      <tbody>
        {data?.products?.map((e, i) => (
          <ProductTableBody
            checked={checked.includes(e)}
            setChecked={setChecked}
            key={i}
            product={e}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default ProductsList;
