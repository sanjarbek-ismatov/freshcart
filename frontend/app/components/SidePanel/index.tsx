import Button from "../Button";
import SearchInput from "../SearchInput";
import "./SidePanel.css";
function SidePanel() {
  return (
    <>
      <div className="fixed md:hidden block h-screen w-96 bg-white top-0 left-0 z-30 p-4">
        <div className="flex justify-between items-center my-3">
          <span>Menyu</span>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div>
          <SearchInput full placeholder="Maxsulot nomini yozing" />
          <Button full>Qidirish</Button>
        </div>
      </div>
    </>
  );
}
export default SidePanel;
