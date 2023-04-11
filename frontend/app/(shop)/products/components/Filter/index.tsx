import Collapse from "../Collapse";
import Stores from "../Stores";
import "./Filter.css";
function Filter() {
  return (
    <>
      <div className="w-72">
        <h1>Kategorialar</h1>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
        <Stores />
      </div>
    </>
  );
}
export default Filter;
