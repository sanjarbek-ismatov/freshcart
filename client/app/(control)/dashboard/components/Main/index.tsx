import "./Main.css";
import { Banner, Card, Chart, Order } from "@components/dashboard";

function Main() {
  return (
    <>
      <Banner />
      <div className="flex">
        <Card
          title="Ishlangan summa"
          main="9000$"
          submain="Bir yillik natija"
        />
        <Card title="Buyurtmalar" main="500$" submain="12ta yangi buyurtma!" />
        <Card
          title="Xaridorlar"
          main="40ta"
          submain="Oxirgi 2 kun ichida 10ta"
        />
      </div>

      <Chart />
      <Order />
    </>
  );
}

export default Main;
