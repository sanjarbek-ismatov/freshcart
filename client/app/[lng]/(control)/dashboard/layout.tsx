"use client";
import { ReactNode } from "react";
import { Navbar } from "@components/dashboard";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";
import { useAuth } from "@/app/hooks/useAuth";
import AuthComponent from "@/app/(control)/dashboard/auth/components/AuthComponent";
import { LoadingPage, PanelNavigation } from "@components";
import {usePathname} from "next/navigation";

function VendorDashboardLayout({ children }: { children: ReactNode }) {
  const { data, refetch, isFetching } = useGetControllerInfoQuery();
  const pathname = usePathname()
  const auth = useAuth("vendor");
  return (
    <div className="flex">
      <PanelNavigation />
      <main className="w-full px-5">
        {auth && (
          <Navbar isLoading={isFetching} refetch={refetch} details={data} />
        )}
        {isFetching ? <LoadingPage /> : (auth || pathname.split('/').at(-1) === "register") ? children : <AuthComponent />}
      </main>
    </div>
  );
}

export default VendorDashboardLayout;
