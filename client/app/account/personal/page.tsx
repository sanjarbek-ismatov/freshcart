"use client";
import { Form, Header } from "@/app/account/personal/components";
import { useGetUserInfoQuery } from "@/store/api/ecommerce";

function Personal() {
  const { isLoading, data } = useGetUserInfoQuery();
  return (
    <>
      <h1>Sozlamalar</h1>
      {data && (
        <>
          <Header user={data} />
          <Form user={data} />
        </>
      )}
    </>
  );
}

export default Personal;
