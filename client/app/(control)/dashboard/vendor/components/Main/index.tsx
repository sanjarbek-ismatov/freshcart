import "./Main.css";
import { Banner, Navbar } from "@/app/(control)/dashboard/vendor/components";

function Main() {
  return (
    <main className="w-full px-5">
      <Navbar />
      <Banner />
    </main>
  );
}

export default Main;
