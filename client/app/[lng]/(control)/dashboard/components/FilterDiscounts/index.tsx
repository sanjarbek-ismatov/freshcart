"use client";
import { ProductType } from "@types";
import { Button, Input, Select, Typography } from "@components";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { useUrlContext } from "@/app/context";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { setProductState, useAppSelector } from "@store";
import { Filter } from "@/app/utils/filter";
import { useAddDiscountMutation } from "@store/api";

function FilterDiscounts({
  products,
  discounts,
}: {
  products: ProductType[];
  discounts: number[];
}) {
  const [selected, setSelected] = useState(0);
  const url = useUrlContext();
  const [addDiscount] = useAddDiscountMutation();
  const state = useAppSelector((state) => state.productFilter);
  const filter = useMemo(() => new Filter(setProductState), []);
  const allAreCheck = useMemo(
    () => state.length === products.length,
    [products.length, state.length],
  );
  const addDiscountCallback = useCallback(() => {
    const ids = state.map((e) => e._id);
    addDiscount(ids);
  }, [addDiscount, state]);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex w-96">
          <Input />
          <Button onClick={addDiscountCallback} disabled={state.length === 0}>
            Chegirma e'lon qilish
          </Button>
        </div>
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
                <Checkbox
                  onChange={() => {
                    filter.select(product, "product");
                  }}
                  checked={
                    state.findIndex((e) => e.slug === product.slug) !== -1
                  }
                />
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
