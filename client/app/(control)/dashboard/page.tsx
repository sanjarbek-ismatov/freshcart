"use client";
import { Main } from "@components/dashboard";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

function VendorDashboardPage() {
  const auth = useAuth("vendor");

  const router = useRouter();
  // if (!auth) router.replace("/dashboard/auth/login");
  return <Main />;
}

export default VendorDashboardPage;
