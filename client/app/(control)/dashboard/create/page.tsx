import { CreateProduct } from "@/app/(control)/dashboard/create/components";
import { getSSRData } from "@/app/utils/getData";
import { CategoryType } from "@types";

async function CreatePage() {
  const categories = await getSSRData<CategoryType[]>(
    `${process.env.SERVER_URL}/category/all`,
  );
  console.log(categories);
  return <CreateProduct categories={categories} />;
}

export default CreatePage;
