import { Button } from "@/app/components";
import { Filter } from "@/app/(control)/dashboard/vendor/products/components";
import {
  Table,
  TableBody,
  TableHead,
} from "@/app/(control)/dashboard/vendor/components";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";

function ProductsDashboardPage() {
  return (
    <>
      <header className="w-full flex justify-between my-5">
        <h1 className="text-3xl font-semibold text-slate-800">Maxsulotlar</h1>
        <Button>Maxsulot qo'shish</Button>
      </header>
      <main>
        <Filter />
        <Table>
          <TableHead
            data={[
              <Checkbox key={1} checked={false} />,
              "Rasmi",
              "Nomi",
              "Kategoriyasi",
              "Holati",
              "Qiymati",
              "Sanasi",
            ]}
          />
          <tbody>
            <TableBody
              data={[
                <Checkbox key={1} checked={true} />,
                "rasm",
                "Snikers",
                "Oziq-ovqat",
                "Bajarilmoqda",
                "10",
                "12.12.2005",
              ]}
            />
          </tbody>
        </Table>
      </main>
    </>
  );
}

export default ProductsDashboardPage;
