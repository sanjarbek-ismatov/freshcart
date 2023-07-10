"use client";
import { Form } from "@/app/(customer)/account/personal/components";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { Typography } from "@components";

function Personal() {
  const { isLoading, data } = useGetUserInfoQuery();
  return (
    <div>
      <Typography text="Sozlamalar" />
      {data && (
        <>
          {/*<Header user={data} />*/}
          <Form user={data} />
        </>
      )}
    </div>
  );
}

export default Personal;
