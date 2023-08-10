import "./Backdrop.css";
import React from "react";

function Backdrop() {
  return (
    <div className="w-full fixed top-0 right-0 z-20 opacity-50 min-h-screen h-full bg-black"></div>
  );
}

export default Backdrop;
