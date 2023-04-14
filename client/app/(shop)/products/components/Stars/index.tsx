import { useEffect, useMemo } from "react";
import "./Starts.css";
import Checkbox from "../Checkbox";
function Starts() {
  const stars = useMemo(() => {
    const start = [
      Array.from(new Array(5), (v, k) =>
        Array.from(new Array(++k), (v, k) => ++k)
      ),
    ];
    start.reverse();
    return start;
  }, []);
  return (
    <>
      <div className="my-3">
        <Checkbox checked>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox checked>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox checked>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox checked>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox checked>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </Checkbox>
      </div>
    </>
  );
}
export default Starts;
