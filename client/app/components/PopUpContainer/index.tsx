"use client";
import { ReactNode, useEffect, useRef } from "react";

function PopUpContainer({
  body,
  children,
}: {
  body: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elem = ref.current;
    const child = document.createElement("div");
    child.className = "absolute p-3 bg-white z-20 border rounded-md";
    child.textContent = body;
    if (!elem) return;
    const handleMouseEnter = () => {
      elem.parentElement?.append(child);
      const x = elem.offsetLeft + (elem.clientWidth - child.clientWidth) / 2;
      const y = elem.offsetTop;
      child.style.top = y + child.clientHeight / 2 + "px";
      child.style.left = x + "px";
    };
    const handleMouseLeave = () => {
      child.remove();
    };
    elem.addEventListener("mouseenter", handleMouseEnter);
    elem.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      elem.removeEventListener("mouseenter", handleMouseEnter);
      elem.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [body]);
  return <div ref={ref}>{children}</div>;
}

export default PopUpContainer;
