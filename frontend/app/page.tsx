import { Swiper, Menu, Navbar } from "./components";
export default function Home() {
  return (
    <div className="container max-w-[1200px] mx-auto">
      <Navbar />
      <Menu />
      <Swiper />
    </div>
  );
}
