import "./StoresGrid.css";
import stores from "data/stores.json";
import Image from "next/image";
import Link from "next/link";
import StoreImage from "public/images/stores-logo/stores-logo-1.svg";
function StoresGrid() {
  return (
    <div className="my-5">
      <p className="py-4">
        Bizda <span className="text-green-500">{stores.length}</span> sotuvchi
        bor
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-16 gap-y-5">
        {stores.map((e, i) => (
          <div
            key={i}
            className="flex justify-between p-5 border rounded-md hover:border-green-500"
          >
            <div>
              <Image
                className="rounded-full"
                src={StoreImage}
                alt="Do'kon nomi"
              />
            </div>
            <div>
              <Link
                className="font-bold text-xl hover:text-green-500"
                href={`/store/${e.slug}`}
              >
                {e.name}
              </Link>
              <p className="text-sm text-slate-600 my-3">
                Oziq Ovqat, Kiyim kechak
              </p>
              <span className="font-normal mx-1 text-sm p-1 bg-slate-300 rounded-lg">
                {e.sells}ta savdo
              </span>
              <span className="font-normal mx-1 text-sm p-1 bg-slate-300 rounded-lg">
                {e.stars}ta yulduz
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default StoresGrid;
