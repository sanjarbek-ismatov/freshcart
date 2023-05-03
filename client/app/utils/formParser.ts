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
    for (let i = 0; i < form.target.length; i++) {
      if (this.form.target[i].type === "file")
        this.formData.append(
          this.form.target[i].name,
          this.form.target[i].files[0]
        );
      else
        this.formData.append(
          this.form.target[i].name,
          this.form.target[i].value
        );
    }
  }

  public get getData() {
    return this.formData;
  }

  public sendForm() {
    this.mutation(this.formData);
  }
}

export default FormParser;
