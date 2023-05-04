import { MutationTrigger } from "@reduxjs/toolkit/src/query/react/buildHooks";
import { MutationDefinition } from "@reduxjs/toolkit/query";

class FormParser {
  private form?: any;
  private formData = new FormData();
  private mutation: MutationTrigger<MutationDefinition<any, any, any, any>>;

  constructor(
    mutation: MutationTrigger<MutationDefinition<any, any, any, any>>
  ) {
    this.mutation = mutation;
  }

  public setForm(form: any) {
    this.form = form;
    const obj: Record<string, any> = {};
    const { target } = form;
    for (let i = 0; i < target.length; i++) {
      const { type, name, value, files } = target[i];

      if (type === "file") {
        obj[name] = [];
        for (const image of files) {
          this.formData.append(name, image);
          obj[name].push(image);
        }
      } else if (type !== "submit") {
        const key = name || "category";
        this.formData.append(key, value);
        obj[key] = value;
      }
    }

    console.log(obj);
  }

  public get getData() {
    return this.formData;
  }

  public sendForm() {
    return this.mutation(this.formData);
  }
}

export default FormParser;
