"use client";
import { ReactNode, useEffect, useState } from "react";
import "./ErrorBoundary.css";
function ErrorBoundary({ children }: { children: ReactNode }) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    function errorHandler(error: ErrorEvent) {
      console.log(error);
      setHasError(true);
    }
    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  });
  if (hasError) return <p>Something</p>;
  return children as JSX.Element;
}
export default ErrorBoundary;
