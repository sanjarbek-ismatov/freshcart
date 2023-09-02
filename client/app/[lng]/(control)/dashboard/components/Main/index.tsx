import { Banner, Card, Chart, Order } from "@components/dashboard";
import { VendorWithOrders } from "@types";

function Main({ data }: { data?: VendorWithOrders }) {
  const lastOrders = data?.orders.filter(
    (e) => e.status === "pending" || e.status === "processing"
  );
  const lastOrdersTotalPrice = lastOrders?.reduce(
    (accu, curr) => accu + curr.totalPrice,
    0
  );
  const ordersinlastTwoWeeks = data?.orders.filter((e) => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const orderDate = new Date(e.date).getTime();
    return orderDate > date.getTime();
  });
  const users = new Set(data?.orders.map((e) => e.clientId._id));

  return (
    <>
      <Banner />
      <div className="flex">
        <Card
          title="Ishlangan summa"
          main={`${data?.vendor.annualIncome ?? 0}$`}
          submain="Bir yillik natija"
        />
        <Card
          title="Buyurtmalar"
          main={`${lastOrdersTotalPrice ?? 0}$`}
          submain={`${lastOrders?.length ?? 0}ta yangi buyurtma!`}
        />
        <Card
          title="Xaridorlar"
          main={`${users.size ?? 0}ta`}
          submain={`Oxirgi 1 hafta ichida ${
            ordersinlastTwoWeeks?.length ?? 0
          }ta`}
        />
      </div>
      <div className="max-h-[600px] h-full flex justify-center">
        <Chart orders={data?.orders} />
      </div>
      <Order orders={data?.orders} />
    </>
  );
}

export default Main;
