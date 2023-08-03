import { ReactNode } from "react";
import {
  NavbarAdmin,
  Navigation,
} from "@/app/(control)/admin/dashboard/components";

function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarAdmin />
      <div className="px-12 flex my-5">
        <Navigation />
        {children}
      </div>
    </>
  );
}

export default AdminLayout;
