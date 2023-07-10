"use client";
import { Form } from "@/app/(customer)/account/personal/components";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";
import { Typography } from "@components";

function Personal() {
  const { isLoading, data } = useGetUserInfoQuery();
  return (
    <>
      <Typography text="Sozlamalar" />
      {data && (
        <>
          {/*<Header user={data} />*/}
          <Form user={data} />
        </>
      )}
    </>
  );
}

export default Personal;
