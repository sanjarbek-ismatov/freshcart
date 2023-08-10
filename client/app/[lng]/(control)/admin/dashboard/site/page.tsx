import { Typography } from "@components";
import { SiteForm } from "@/app/(control)/admin/dashboard/site/components";

function SiteSettingPage() {
  return (
    <div>
      <Typography text="Sayt sozlamalari" />
      <br />
      <section>
        <SiteForm />
      </section>
    </div>
  );
}

export default SiteSettingPage;
