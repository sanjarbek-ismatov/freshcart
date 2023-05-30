import {
  Main,
  PanelNavigation,
} from "@/app/(control)/dashboard/vendor/components";

function VendorDashboardPage() {
  return (
    <div className="flex">
      <PanelNavigation />
      <Main />
    </div>
  );
}

export default VendorDashboardPage;
