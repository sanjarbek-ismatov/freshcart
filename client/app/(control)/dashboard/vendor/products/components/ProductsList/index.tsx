"use client";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";
import {
  Table,
  TableBody,
  TableHead,
} from "@/app/(control)/dashboard/vendor/components";
import { Checkbox } from "@/app/(customer)/(shop)/products/components";
import Image from "next/image";

function ProductsList() {
  const { isLoading, data } = useGetControllerInfoQuery();
  return (
    <Table>
      <TableHead
        data={[
          <Checkbox key={1} checked={false} />,
          "Rasmi",
          "Nomi",
          "Kategoriyasi",

          "Qiymati",
          "Sanasi",
          <i key={1} className="fa-solid fa-ellipsis-vertical"></i>,
        ]}
      />
      <tbody>
        {data?.products?.map((e, i) => (
          <TableBody
            key={i}
            data={[
              <Checkbox key={i} checked={true} />,
              <Image
                key={i}
                src={`http://localhost:4000/api/files/image/${e.images[0]}`}
                width={50}
                height={50}
                alt="Maxsulotning rasmi"
                unoptimized
              />,
              e.name,
              e.category[0],

              e.price,
              new Date(e.dateOfManufacture).toLocaleDateString(),
              <i key={i} className="fa-solid fa-ellipsis-vertical"></i>,
            ]}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default ProductsList;
