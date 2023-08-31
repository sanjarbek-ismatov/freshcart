"use client";
import { useAddProductMutation } from "@/store/api/ecommerce";
import FormParser from "@/app/utils/formParser";
import { Button, Input, Range, Select, TextArea } from "@components";
import { CategoryType, SubCategoryType } from "@types";
import { useCallback, useState } from "react";

function CreateProduct({ categories }: { categories: CategoryType[] }) {
  const [addProduct] = useAddProductMutation();
  const [category, setCategory] = useState<SubCategoryType[]>(
    categories[0].subCategories
  );
  const [subIndex, setSubIndex] = useState(0);
  const formParser = new FormParser();
  const handleChangeMainCategory = useCallback(
    (value: string) => {
      const currCategory = categories.find(
        (e) => e.name === value
      )?.subCategories;
      currCategory && setCategory(currCategory);
    },
    [categories]
  );
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
          formParser.getFormAsFormData.append(
            "category",
            category[subIndex]._id
          );
          console.log(formParser.getFormAsObject);
          // addProduct(formParser.getFormAsFormData);
        }}
        encType="multipart/form-data"
      >
        <Input name="name" label="Mahsulot nomi" fullWidth />
        <Input name="price" label="Narxi" fullWidth />
        <Select
          onChange={(e) => handleChangeMainCategory(e.target.value)}
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
          onChange={(e) => setSubIndex(e.target.selectedIndex)}
          defaultValue={category[0]._id}
          fullWidth
        >
          {category.map((e, i) => (
            <option key={i} value={e._id}>
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
        {/* <Input
          type="number"
          name="weight"
          label="Mahsulot og'irligi (gram da)"
          fullWidth
        /> */}
        <Range
          inputWidth="full"
          label="Maxsulot og'irligi"
          minValue={0}
          maxValue={500}
        />
        <Button type="submit">Mahsulot qo`shish</Button>
      </form>
    </div>
  );
}

export default CreateProduct;
