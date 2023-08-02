import { ReactNode } from "react";
import { NavbarAdmin } from "@/app/(control)/admin/dashboard/components";

function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarAdmin />
      <div className="px-12">{children}</div>
    </>
  );
}

export default AdminLayout;
