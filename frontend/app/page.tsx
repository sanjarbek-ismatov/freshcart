import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
export default function Home() {
  return (
    <div className="container max-w-[1200px] mx-auto">
      <Navbar />
      <Menu />
    </div>
  );
}
