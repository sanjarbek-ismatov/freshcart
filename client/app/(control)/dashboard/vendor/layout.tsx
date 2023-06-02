import { ReactNode } from "react";
import {
  Navbar,
  PanelNavigation,
} from "@/app/(control)/dashboard/vendor/components";

function VendorDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <PanelNavigation />
      <main className="w-full px-5">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default VendorDashboardLayout;
