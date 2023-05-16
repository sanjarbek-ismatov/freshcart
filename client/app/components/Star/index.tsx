import "./Star.css";

function Star({ rating }: { rating: number }) {
  return (
    <div>
      {Array.from(new Array(rating || 0), (v, k) => k + 1).map((e, i) => (
        <i key={i} className="fa-solid text-sm text-yellow-500 fa-star"></i>
      ))}
    </div>
  );
}

export default Star;
