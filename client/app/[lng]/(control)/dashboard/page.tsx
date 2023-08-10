"use client";
import { Main } from "@components/dashboard";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";

function VendorDashboardPage() {
  const { data } = useGetControllerInfoQuery();
  return <Main data={data} />;
}

export default VendorDashboardPage;
