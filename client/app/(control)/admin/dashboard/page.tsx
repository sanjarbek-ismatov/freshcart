import {
  NavbarAdmin,
  Navigation,
} from "@/app/(control)/admin/dashboard/components";

function AdminDashboardPage() {
  return (
    <>
      <NavbarAdmin />
      <main>
        <Navigation />
      </main>
    </>
  );
}

export default AdminDashboardPage;
