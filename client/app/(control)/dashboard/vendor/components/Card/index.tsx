import "./Card.css";

function Card({
  title,
  main,
  submain,
}: {
  title: string;
  main: string;
  submain: string;
}) {
  return (
    <div className="w-full px-5 py-8 shadow-md mx-2">
      <h4 className="text-lg  text-slate-800">{title}</h4>
      <h1 className="text-3xl mt-4 mb-2 font-bold text-slate-900">{main}</h1>
      <p className="text-sm text-slate-500">{submain}</p>
    </div>
  );
}

export default Card;
