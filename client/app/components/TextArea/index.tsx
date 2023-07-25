"use client";
import { ComponentProps, useEffect, useRef } from "react";

function TextArea({
  fullWidth = true,
  label,
  ...rest
}: { fullWidth?: boolean; label?: string } & ComponentProps<"textarea">) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const textarea = ref.current;
    if (!textarea) return;

    function handleInput(event: any) {
      const target = event.currentTarget;
      target.style.height = "auto";
      target.style.height = target.scrollHeight + "px";
    }

    textarea.addEventListener("input", handleInput);
    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);
  return (
    <label className="text-sm mt-2 text-gray-500">
      {label}
      <textarea
        ref={ref}
        {...rest}
        className={`${
          fullWidth && "w-full"
        } mt-2 px-3 overflow-hidden py-2 outline-none border-slate-300 focus:border-green-500 border rounded-md`}
      ></textarea>
    </label>
  );
}

export default TextArea;
