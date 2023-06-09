"use client";
import { Button, Input, Select } from "@/app/components";
import { useAddProductMutation } from "@/store/api/ecommerce";
import FormParser from "@/app/utils/formParser";

function CreatePage() {
  const [addProduct] = useAddProductMutation();
  const formParser = new FormParser(addProduct);
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
          formParser.sendForm().then((data: any) => console.log(data));
        }}
        encType="multipart/form-data"
      >
        <Input name="name" label="Mahsulot nomi" fullWidth />
        <Input name="price" label="Narxi" fullWidth />
        <Select
          onChange={(e) => console.log(e.target.value)}
          defaultValue={"oziq-ovqat"}
          fullWidth
        >
          <option value="oziq-ovqat">Oziq-Ovqat</option>
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

export default CreatePage;
