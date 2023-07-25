"use client";
import { useAddProductMutation } from "@/store/api/ecommerce";
import FormParser from "@/app/utils/formParser";
import { Button, Input, Select } from "@components";
import { CategoryType } from "@types";
import { useMemo, useState } from "react";

function CreateProduct({ categories }: { categories: CategoryType[] }) {
  const [addProduct] = useAddProductMutation();
  const [selected, setSelected] = useState("");
  const subCategories = useMemo(
    () =>
      categories.find((e) => e.slug === selected)?.subCategories ||
      categories[0].subCategories,
    [categories, selected],
  );
  const formParser = new FormParser();
  return (
    <div className="">
      <h1 className="text-3xl my-5 font-bold text-slate-800">
        Maxsulot qo'shish
      </h1>
      <form
        className="w-[600px]"
        onSubmit={(event) => {
          event.preventDefault();
          formParser.setForm(event);
          addProduct(formParser.getFormAsFormData);
        }}
        encType="multipart/form-data"
      >
        <Input name="name" label="Mahsulot nomi" fullWidth />
        <Input name="price" label="Narxi" fullWidth />
        <Select
          onChange={(e) => setSelected(e.target.value)}
          defaultValue={categories[0].slug}
          fullWidth
        >
          {categories.map((e, i) => (
            <option value={e.slug} key={i}>
              {e.name}
            </option>
          ))}
        </Select>
        <Select defaultValue={subCategories[0].slug} fullWidth>
          {subCategories.map((e, i) => (
            <option value={e.slug} key={i}>
              {e.name}
            </option>
          ))}
        </Select>
        <Input name="description" label="Mahsulot haqida" fullWidth />
        <Input type="file" name="images" label="Rasmlar" multiple fullWidth />
        <Input name="weight" label="Mahsulot og'irligi" fullWidth />
        <Input
          name="dateOfManufacture"
          type="date"
          label="Ishlab chiqarilgan sana"
          fullWidth
        />
        <Input name="guarantee" type="date" label="Kafolat muddati" fullWidth />
        <Button type="submit">Mahsulot qo`shish</Button>
      </form>
    </div>
  );
}

export default CreateProduct;
