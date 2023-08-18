"use client";
import { ProductType } from "@types";
import { Select } from "@components";
import { useState } from "react";

function FilterDiscounts({
  products,
  discounts,
}: {
  products: ProductType[];
  discounts: number[];
}) {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="flex justify-between">
        <p>10ta maxsulot topildi</p>
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
      <ul>
        {products
          .filter((product) =>
            product.discounts.some(
              (value) => selected === value || selected === 0,
            ),
          )
          .map((product, index) => (
            <li key={index}>
              <div>
                <p>{product.name}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FilterDiscounts;
