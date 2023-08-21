"use client";
import { ProductType } from "@types";
import { Button, Select, Typography } from "@components";
import { useState } from "react";
import Image from "next/image";
import { useUrlContext } from "@/app/context";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";

function FilterDiscounts({
  products,
  discounts,
}: {
  products: ProductType[];
  discounts: number[];
}) {
  const [selected, setSelected] = useState(0);
  const url = useUrlContext();
  return (
    <div>
      <div className="flex justify-between">
        <Button disabled>Chegirma e'lon qilish</Button>
        <Select
          defaultValue="0"
          onChange={(event) => setSelected(+event.target.value)}
        >
          <option value="0" selected>
            Belgilanmagan
          </option>
          {discounts.map((discount, index) => (
            <option
              selected={selected === discount}
              key={index}
              value={discount}
            >
              {discount}%
            </option>
          ))}
        </Select>
      </div>
      <ul className="border">
        {products
          .filter((product) =>
            product.discounts.some(
              (value) => selected === value || selected === 0,
            ),
          )
          .map((product, index) => {
            const totalDiscount = product.discounts.reduce(
              (acc, curr) => acc + curr,
              0,
            );
            return (
              <li key={index} className="flex items-center shadow my-2 p-3">
                <Checkbox checked={true} />
                <Image
                  src={`${url}/files/image/${product.images[0]}`}
                  className="rounded-full p-2 shadow-lg"
                  alt={product.name}
                  width={70}
                  height={70}
                  unoptimized
                />
                <Typography text={product.name} size="md" />
                <div>
                  <p>Jami narxi: {product.price} $</p>
                  <p>Chegirma: {totalDiscount}%</p>
                  <p>
                    Hozirgi narxi:{" "}
                    {product.price - (totalDiscount / 100) * product.price} $
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default FilterDiscounts;
