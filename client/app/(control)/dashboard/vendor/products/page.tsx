import { Button } from "@/app/components";
import { Filter } from "@/app/(control)/dashboard/vendor/products/components";

function ProductsDashboardPage() {
  return (
    <>
      <header className="w-full flex justify-between my-5">
        <h1 className="text-3xl font-semibold text-slate-800">Maxsulotlar</h1>
        <Button>Maxsulot qo'shish</Button>
      </header>
      <main>
        <Filter />
      </main>
    </>
  );
}

export default ProductsDashboardPage;
