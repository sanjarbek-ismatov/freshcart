"use client";
import "./Starts.css";
import Checkbox from "../Checkbox";
import { starsDispatch, useAppSelector } from "@/store/store";

function Starts() {
  // const stars = useMemo(() => {
  //   // const start = [
  //   //   Array.from(new Array(5), (v, k) =>
  //   //     Array.from(new Array(++k), (v, k) => ++k)
  //   //   ),
  //   // ];
  //   // start.reverse();
  //   // return start;
  // }, []);
  const state = useAppSelector((state) => state.filter);

  return (
    <>
      <div className="my-3">
        <Checkbox
          onClick={() => starsDispatch(5)}
          checked={state.stars.includes(5)}
        >
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox
          onClick={() => starsDispatch(4)}
          checked={state.stars.includes(4)}
        >
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox
          onClick={() => starsDispatch(3)}
          checked={state.stars.includes(3)}
        >
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox
          onClick={() => starsDispatch(2)}
          checked={state.stars.includes(2)}
        >
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
          <i className="fa-regular fa-star text-yellow-400"></i>
        </Checkbox>
        <br />
        <Checkbox
          onClick={() => starsDispatch(1)}
          checked={state.stars.includes(1)}
        >
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
