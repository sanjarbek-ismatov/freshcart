import {
  Swiper,
  Menu,
  Navbar,
  Categories,
  PopularProducts,
  About,
  Footer,
} from "./components";
export default function Home() {
  return (
    <div className="container max-w-[1300px] mx-auto">
      <Navbar />
      <Menu />
      <Swiper />
      <Categories />
      <PopularProducts />
      <About />
      <Footer />
    </div>
  );
}
