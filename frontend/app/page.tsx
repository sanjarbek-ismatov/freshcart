import {
  Swiper,
  Menu,
  Navbar,
  Catergories,
  PopularProducts,
} from "./components";
export default function Home() {
  return (
    <div className="container max-w-[1300px] mx-auto">
      <Navbar />
      <Menu />
      <Swiper />
      <Catergories />
      <PopularProducts />
    </div>
  );
}
