"use client";
import { useAddProductMutation } from "@/store/api/ecommerce";
import FormParser from "@/app/utils/formParser";
import { Button, Input, Select, TextArea } from "@components";
import { CategoryType } from "@types";
import { useMemo, useState } from "react";

function CreateProduct({ categories }: { categories: CategoryType[] }) {
  const [addProduct] = useAddProductMutation();
  const [selected, setSelected] = useState(categories[0].name);
  const [category, setCategory] = useState(categories[0].subCategories[0]._id);
  const subCategories = useMemo(
    () =>
      categories.find((e) => e.name === selected)?.subCategories ||
      categories[0].subCategories,
    [categories, selected],
  );
  const formParser = new FormParser();
  const handleChange = (category: string) => {
    const group = categories.find((e) => e.name === selected);
    const result = group?.subCategories.find((e) => e.slug === category) as any;
    setCategory(result?._id);
  };
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
          formParser.getFormAsFormData.append("category", category);
          console.log(category);
          // addProduct(formParser.getFormAsFormData);
        }}
        encType="multipart/form-data"
      >
        <Input name="name" label="Mahsulot nomi" fullWidth />
        <Input name="price" label="Narxi" fullWidth />
        <Select
          onChange={(e) => {
            setSelected(e.target.value);
            setCategory(subCategories[0]._id);
          }}
          defaultValue={categories[0].name}
          fullWidth
        >
          {categories.map((e, i) => (
            <option value={e.name} key={i}>
              {e.name}
            </option>
          ))}
        </Select>
        <Select
          onChange={(e) => handleChange(e.target.value)}
          defaultValue={subCategories[0].slug}
          fullWidth
        >
          {subCategories.map((e, i) => (
            <option value={e.slug} key={i}>
              {e.name}
            </option>
          ))}
        </Select>
        <TextArea name="description" label="Mahsulot haqida" fullWidth />
        <Input
          type="file"
          name="images"
          accept="image/*"
          label="Rasmlar"
          multiple
          fullWidth
        />
        <Input name="weight" label="Mahsulot og'irligi" fullWidth />
        <Button type="submit">Mahsulot qo`shish</Button>
      </form>
    </div>
  );
}

export default CreateProduct;
