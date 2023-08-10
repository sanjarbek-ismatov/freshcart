import "./LoadingPage.css";
import { Spinner } from "@/app/components";

function LoadingPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner size="w-24 h-24" />
    </div>
  );
}

export default LoadingPage;
