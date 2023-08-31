"use client";
import { DiscountType, ProductType } from "@types";
import { Button, Range, Select, Typography } from "@components";
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
    [products.length, state.length]
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
        <Range
          maxValue={100}
          minValue={0}
          onChange={(event) => setPercent(event)}
          inputWidth={200}
        />
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
      <ul className="border max-h-screen h-100 overflow-y-auto">
        {products
          .filter(
            (product) =>
              product.discounts.some((value) => selected === value.percent) ||
              selected === 0
          )
          .map((product, index) => {
            const totalDiscount = product.discounts.reduce(
              (acc, curr) => acc + curr.percent,
              0
            );
            return (
              <li
                key={index}
                className="flex items-center justify-between shadow my-2 p-3"
              >
                <label className="flex items-center">
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
                    className="rounded-full p-2 shadow-lg mx-3"
                    alt={product.name}
                    width={70}
                    height={70}
                    unoptimized
                  />
                  <Typography text={product.name} size="md" />
                </label>
                <div className="text-[12px] text-gray-600">
                  <p>
                    <span className="text-gray-900">Asl narxi: </span>{" "}
                    {product.price} $
                  </p>
                  <p>
                    <span className="text-gray-900">Chegirma: </span>{" "}
                    {totalDiscount}%
                  </p>
                  <p>
                    <span className="text-gray-900">Hozirgi narx: </span>:{" "}
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
