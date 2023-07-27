import { CreateProduct } from "@/app/(control)/dashboard/create/components";
import { getSSRData } from "@/app/utils/getData";
import { CategoryType } from "@types";
import { getServerUrl } from "@/app/utils/getServerUrl";

async function CreatePage() {
  const categories = await getSSRData<CategoryType[]>(
    `${getServerUrl()}/category/all`,
  );
  console.log(categories);
  return <CreateProduct categories={categories} />;
}

export default CreatePage;
