import "./Panigation.css";
import Link from "next/link";

function Panigation() {
  const pageCount = () => {
    const pageListWithNumber = [...Array.from(new Array(10), (v, k) => ++k)];
    const result = pageListWithNumber.map((e, i) => ({
      path: `/products?page=${e}`,
      title: e,
    }));
    return result;
  };
  return (
    <>
      <div className="flex">
        <Link href={`/products?page=1`}>
          <div className="w-10 h-10 mx-1 rounded-md border flex justify-center items-center">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </Link>
        {pageCount().map((e, i) => (
          <Link key={i} href={e.path}>
            <div className="w-10 h-10 mx-1 rounded-md text-white bg-green-500 flex justify-center items-center">
              {e.title}
            </div>
          </Link>
        ))}
        <Link href={`/products?page=2`}>
          <div className="w-10 h-10 mx-1 rounded-md  border flex justify-center items-center">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Panigation;
