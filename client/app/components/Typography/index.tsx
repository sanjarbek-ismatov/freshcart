import "./Typography.css";

function Typography({
  text,
  size = "3xl",
}: {
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | string;
}) {
  return (
    <h1 className={`text-${size} my-2 font-semibold text-slate-800`}>{text}</h1>
  );
}

export default Typography;
