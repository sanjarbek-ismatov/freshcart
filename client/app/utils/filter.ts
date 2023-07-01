import { ProductType, CheckoutProduct } from "@types";
type Item<T> = T extends CheckoutProduct ? CheckoutProduct : ProductType;
class Filter<T extends Item<T>> {
  private _state: T[];
  constructor(state: T[]) {
    this._state = state;
  }
  select(item: T, type: "checkout" | "product") {
    const foundedItem = this._state.findIndex((state) =>
      type === "checkout"
        ? state.id.slug === item.id.slug
        : state.slug === item.slug
    );
    if (foundedItem !== -1) this._state.splice(foundedItem, 1);
    else this._state.push(item);
  }

  selectAll(item: T[]) {
    this._state.splice(0, this._state.length);
    this._state.push(...item);
  }
  reset() {
    this._state = [];
  }
  get state(): T[] {
    return this._state;
  }
}
export { Filter };
