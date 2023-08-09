import { Input, TextArea, Typography } from "@components";

function SiteSettingPage() {
  return (
    <div>
      <Typography text="Sayt sozlamalari" />
      <br />
      <section>
        <Typography size="lg" text="SEO sozlamalari" />
        <form>
          <Input name="title" type="text" label="Sayt sarlavhasi" />
          <TextArea name="description" label="Sayt haqida" />
          <Input type="file" name="image" />
        </form>
      </section>
    </div>
  );
}

export default SiteSettingPage;
