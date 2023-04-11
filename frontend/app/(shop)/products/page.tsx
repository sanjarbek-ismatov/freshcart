"use client";
import { BreadCrumb } from "@/app/components";
import React from "react";
import { Filter, Products } from "./components";

const Index = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1300px]">
        <BreadCrumb
          path={[
            { title: "Uy", path: "/" },
            { title: "Maxsulotlar", path: "/products" },
          ]}
        />
        <div className="grid grid-cols-2">
          <Filter />
          <Products />
        </div>
      </div>
    </>
  );
};

export default Index;
