"use client";
import { DiscountType, ProductType } from "@types";
import { Button, Select, Typography } from "@components";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { useUrlContext } from "@/app/context";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import { setProductState, useAppSelector } from "@store";
import { Filter } from "@/app/utils/filter";
import { useAddDiscountMutation, useRemoveDiscountMutation } from "@store/api";

function FilterDiscounts({
  products,
  discounts,
}: {
  products: ProductType[];
  discounts: DiscountType[];
}) {
  const [percent, setPercent] = useState(0);
  const [selected, setSelected] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const url = useUrlContext();
  const [addDiscount] = useAddDiscountMutation();
  const [removeDiscount] = useRemoveDiscountMutation();
  const state = useAppSelector((state) => state.productFilter);
  const filter = useMemo(() => new Filter(setProductState), []);
  const allAreCheck = useMemo(
    () => state.length === products.length,
    [products.length, state.length],
  );
  const addDiscountCallback = useCallback(() => {
    const ids = state.map((e) => e._id);
    addDiscount({ products: ids, percent });
  }, [addDiscount, percent, state]);
  const removeDiscountCallback = useCallback(() => {
    removeDiscount(selectedId ? { id: selectedId } : { type: "all" });
  }, [removeDiscount, selectedId]);
  return (
    <>
      <div className="flex justify-between items-center">
        <label>
          <input
            max={100}
            min={0}
            type="range"
            className="w-56"
            onChange={(event) => setPercent(+event.target.value)}
            value={percent}
          />
          <span className="w-12 inline-block mx-2">{percent} %</span>
        </label>
        <Select
          defaultValue="0"
          onChange={(event) => {
            const discount = JSON.parse(event.target.value);
            setSelected(discount.percent ?? 0);
            setSelectedId(discount._id);
          }}
        >
          <option value="0" selected>
            Belgilanmagan
          </option>
          {discounts.map((discount, index) => (
            <option
              selected={selected === discount.percent}
              key={index}
              value={JSON.stringify(discount)}
            >
              {discount.percent}%
            </option>
          ))}
        </Select>
      </div>
      <ul className="border">
        {products
          .filter(
            (product) =>
              product.discounts.some((value) => selected === value.percent) ||
              selected === 0,
          )
          .map((product, index) => {
            const totalDiscount = product.discounts.reduce(
              (acc, curr) => acc + curr.percent,
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
      <Button onClick={addDiscountCallback} disabled={state.length === 0}>
        Chegirma e'lon qilish
      </Button>
      <Button onClick={removeDiscountCallback}>
        {selected === 0
          ? "Barcha chegirmani olib tashlash"
          : "Ushbu chegirmani olib tashlash"}
      </Button>
    </>
  );
}

export default FilterDiscounts;
