import "./Star.css";

function Star({ rating }: { rating: number }) {
  return (
    <div>
      {Array.from(new Array(5), (v, k) => k + 1).map((e, i) => (
        <i
          key={i}
          className={`fa-solid text-sm ${
            e <= rating ? "text-yellow-500" : "text-slate-400"
          } fa-star`}
        ></i>
      ))}
    </div>
  );
}

export default Star;
