import "./StoresGrid.css";
import Image from "next/image";
import Link from "next/link";
import { VendorType } from "@/types";
import { getServerUrl } from "@/app/utils/getServerUrl";

function StoresGrid({ vendors }: { vendors: VendorType[] }) {
  return (
    <div className="my-5">
      <p className="py-4">
        Bizda <span className="text-green-500">{vendors.length}</span> sotuvchi
        bor
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-16 gap-y-5">
        {vendors.map((e, i) => (
          <div
            key={i}
            className="flex justify-between p-5 border rounded-md hover:border-green-500"
          >
            <div>
              <Image
                className="rounded-full"
                src={`${getServerUrl()}/files/image/${e.image}`}
                width={100}
                height={100}
                alt="Do'kon nomi"
                unoptimized
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
                {e.category.join(", ")}
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
