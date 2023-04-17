import "./Catergories.css";
import data from "@/data/categories.json";
import Image from "next/image";
import Link from "next/link";
function Catergories() {
  return (
    <>
      <div className="my-5 flex">
        {data?.slice(0, 6).map((e, i) => (
          <div
            key={i}
            className="w-64 mx-4 border group border-gray-300  px-2 py-4 flex-col flex justify-center text-center items-center rounded-md hover:border-green-500"
          >
            <Image
              src={e.image}
              width={100}
              height={0}
              alt="Category image"
              loader={() => e.image}
              unoptimized
            />
            <Link
              className="my-3 group-hover:text-green-500 font-medium text-slate-700"
              href={"/"}
            >
              {e.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
export default Catergories;
