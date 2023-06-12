class FormParser {
  private form?: any;
  private formData = new FormData();
  private mutation: any;

  constructor(mutation: any) {
    this.mutation = mutation;
  }

  public setForm(form: any) {
    this.form = form;
    const obj: Record<string, any> = {};
    const { target } = form;
    for (let i = 0; i < target.length; i++) {
      const { type, name, value, files } = target[i];
      if (target[i] instanceof HTMLFieldSetElement) {
        const childObj: Record<string, any> = {};
        const inputs: any[] = Array.from<any>(target[i].children).map(
          (e: HTMLLabelElement) => e.firstElementChild
        );

        for (const { type, name, files, value } of inputs.slice(1)) {
          if (type === "file") {
            childObj[name] = [];
            for (const image of files) {
              childObj[name].push(image);
            }
          } else if (type !== "submit") {
            const key = name || "category";
            childObj[key] = value;
          }
        }
        obj[target[i].name] = childObj;
        this.formData.append(target[i].name, JSON.stringify(childObj));
      } else if (type === "file") {
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
