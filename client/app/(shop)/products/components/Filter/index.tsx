import Collapse from "../Collapse";
import Price from "../Price";
import Stars from "../Stars";
import Stores from "../Stores";
import "./Filter.css";
function Filter() {
  return (
    <>
      <div className="w-72 p-2 leading-6 mr-5">
        <h1 className={`font-semibold text-lg`}>Kategorialar</h1>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Stores />
        <Price />
        <Stars />
      </div>
    </>
  );
}
export default Filter;
