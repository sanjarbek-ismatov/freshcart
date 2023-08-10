import "./Typography.css";

function Typography({
  text,
  size = "3xl",
  color = "text-slate-800",
}: {
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | string;
  color?: string;
}) {
  return <h1 className={`text-${size} my-2 font-semibold ${color}`}>{text}</h1>;
}

export default Typography;
