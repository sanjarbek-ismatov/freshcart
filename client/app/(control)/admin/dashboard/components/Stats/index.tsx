import "./Stats.css";
import { OrderUsableType, ProductType, UserType } from "@types";

function Stats({
  orders,
  products,
  users,
}: {
  orders: OrderUsableType[];
  products: ProductType[];
  users: UserType[];
}) {
  return (
    <>
      <p>Hello, Stats</p>
    </>
  );
}

export default Stats;
