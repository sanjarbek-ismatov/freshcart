class FormParser {
  private form?: any;
  private formData = new FormData();

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
    console.log(this.formData);
    return this.formData;
  }
}

export default FormParser;
