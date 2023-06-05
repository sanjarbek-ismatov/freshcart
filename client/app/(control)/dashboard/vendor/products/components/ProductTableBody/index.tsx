import "./ProductTableBody.css";
import { ProductType } from "@/types";
import { Dispatch, SetStateAction, useCallback } from "react";
import { TableBody } from "@/app/(control)/dashboard/vendor/components";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import Image from "next/image";

function ProductTableBody({
  product,
  selected,

  setSelected,
}: {
  product: ProductType;
  selected: boolean;

  setSelected: Dispatch<SetStateAction<ProductType[]>>;
}) {
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
        new Date(product.dateOfManufacture).toLocaleDateString(),
        <i key={1} className="fa-solid fa-ellipsis-vertical"></i>,
      ]}
    />
  );
}

export default ProductTableBody;
