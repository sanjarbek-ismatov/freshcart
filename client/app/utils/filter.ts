class Filter {
  private _state: any[];

  constructor(state: any[]) {
    this._state = [...state];
  }

  select(item: any, type: "checkout" | "product") {
    const foundedItem = this._state.findIndex((state) => {
      switch (type) {
        case "checkout":
          return state.id.slug === item.id.slug;
        case "product":
          return state.slug === item.slug;
        default:
          return;
      }
    });
    if (foundedItem !== -1) this._state.splice(foundedItem, 1);
    else this._state.push(item);
  }

  selectAll(item: any[]) {
    this._state.splice(0, this._state.length);
    this._state.push(...item);
  }

  reset() {
    this._state = [];
  }

  get state(): any[] {
    return this._state;
  }
}

export { Filter };
