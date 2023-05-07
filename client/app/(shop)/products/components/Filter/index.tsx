import Price from "../Price";
import Stars from "../Stars";
import Stores from "../Stores";
import "./Filter.css";
import { CategoryType, VendorType } from "@/types";
import { Collapse } from "@/app/(shop)/products/components";

function Filter({
  categories,
  vendors,
}: {
  categories: CategoryType[];
  vendors: VendorType[];
}) {
  return (
    <>
      <div className="w-72 p-2 leading-6 mr-5">
        <h1 className={`font-semibold text-lg`}>Kategorialar</h1>
        {categories.map((e, i) => (
          <Collapse category={e} key={i} />
        ))}
        <Stores vendors={vendors} />
        <Price />
        <Stars />
      </div>
    </>
  );
}

export default Filter;
