"use client";
import { ReactNode } from "react";
import { Navbar, PanelNavigation } from "@components/dashboard";
import { useGetControllerInfoQuery } from "@/store/api/ecommerce";

function VendorDashboardLayout({ children }: { children: ReactNode }) {
  const { data } = useGetControllerInfoQuery();
  return (
    <div className="flex">
      <PanelNavigation />
      <main className="w-full px-5">
        {data && <Navbar details={data} />}
        {children}
      </main>
    </div>
  );
}

export default VendorDashboardLayout;
