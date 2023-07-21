"use client";
import { Main } from "@components/dashboard";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";

function VendorDashboardPage() {
  const auth = useAuth("vendor");
  const { data } = useGetControllerInfoQuery();
  const router = useRouter();
  // if (!auth) router.replace("/dashboard/auth/login");
  return <Main data={data} />;
}

export default VendorDashboardPage;
