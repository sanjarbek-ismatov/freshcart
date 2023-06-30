"use client";
import { ReactNode, useState } from "react";
import FormParser from "@/app/utils/formParser";
import { FormObject } from "@types";

function Form({ children }: { children: ReactNode }) {
  const formParser = new FormParser<FormObject>();
  const [formObject, setFormObject] = useState<FormObject>();
  const [formData, setFormData] = useState<FormData>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formParser.setForm(e);
        setFormData(formParser.getFormAsFormData);
        setFormObject(formParser.getFormAsObject);
      }}
    >
      {children}
    </form>
  );
}

export default Form;
