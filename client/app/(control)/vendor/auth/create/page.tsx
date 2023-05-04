"use client";
import { Button, Input } from "@/app/components";
import { useAddProductMutation } from "@/store/api/ecommerce";
import FormParser from "@/app/utils/formParser";

function CreatePage() {
  const [addProduct, { isLoading }] = useAddProductMutation();
  const formParser = new FormParser(addProduct);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formParser.setForm(event);
        formParser.sendForm().then((data) => console.log(data));
      }}
      encType="multipart/form-data"
    >
      <Input name="name" placeholder="Mahsulot nomi" />
      <Input name="price" placeholder="Narxi" />
      <select>
        <option value="oziq-ovqat">Oziq-Ovqat</option>
      </select>
      <Input name="description" placeholder="Mahsulot haqida" />
      <Input type="file" name="images" placeholder="Rasmlar" multiple />
      <Input name="weight" placeholder="Mahsulot og'irligi" />
      <Input
        name="count"
        type="number"
        placeholder="Omborda qancha mahsulot bor"
      />
      <Input name="guarantee" type="date" placeholder="Kafolat muddati" />
      <Input
        name="expirationData"
        type="date"
        placeholder="Yaroqlilik muddati"
      />
      <Input
        name="dateOfManufacture"
        type="date"
        placeholder="Ishlab chiqarilgan sana"
      />
      <Button type="submit">Mahsulot qo`shish</Button>
    </form>
  );
}

export default CreatePage;
