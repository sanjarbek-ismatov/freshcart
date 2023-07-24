"use client";
import { Form } from "@/app/(customer)/account/personal/components";
import { Typography } from "@components";
import { useUserContext } from "@/app/context";

function Personal() {
  const { data } = useUserContext();
  return (
    <div>
      <Typography text="Sozlamalar" />
      {data && (
        <>
          {/*<Header user={data} />*/}
          <Form user={data.user} />
        </>
      )}
    </div>
  );
}

export default Personal;
