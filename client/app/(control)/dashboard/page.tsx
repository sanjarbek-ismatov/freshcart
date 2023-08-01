"use client";
import { Main } from "@components/dashboard";
import { useAuth } from "@/app/hooks/useAuth";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";

function VendorDashboardPage() {
  const auth = useAuth("vendor");
  const { data, isLoading } = useGetControllerInfoQuery();
  return <Main data={data} />;
}

export default VendorDashboardPage;
