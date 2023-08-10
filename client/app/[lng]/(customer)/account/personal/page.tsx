"use client";
import { Form } from "@/app/(customer)/account/personal/components";
import { LoadingPage, Typography } from "@components";
import { useUserContext } from "@/app/context";

function Personal() {
  const { data, isLoading } = useUserContext();
  return (
    <div className="w-full">
      <Typography text="Sozlamalar" />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="max-w-[400px]">
          <Form user={data?.user} />
        </div>
      )}
    </div>
  );
}

export default Personal;
