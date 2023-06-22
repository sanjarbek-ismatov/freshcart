import "./Typography.css";

function Typography({ text }: { text: string }) {
  return <h1 className="text-3xl my-2 font-semibold text-slate-800">{text}</h1>;
}

export default Typography;
