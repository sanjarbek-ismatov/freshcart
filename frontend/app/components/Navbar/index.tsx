import Image from "next/image";
import React from "react";
import Logo from "public/images/logo/freshcart-logo.svg";
const Index = () => {
  return (
    <div className="row align-items-center my-3">
      <div className="col">
        <Image src={Logo} alt="Brand logo" />
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="input-group align-items-center">
          <input
            className="form-control"
            placeholder="Xohlagan mahsulotingizni qidiring"
            required
          />
          <div className="input-group-append position-relative d-flex align-items-center">
            <i
              style={{ right: "10px" }}
              className="fa-solid fa-magnifying-glass position-absolute "
            ></i>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-2">
        <button className="btn btn-outline-secondary">Joylashuv</button>
      </div>
      <div className="col">
        <span className="position-relative">
          <i className="fa-regular fa-heart"></i>
          <span className="position-absolute text-bg-success top-0 start-100 translate-middle badge rounded-pill">
            1
          </span>
        </span>
        <span className="position-relative mx-3">
          <i className="fa-regular fa-user"></i>
        </span>
        <span className="position-relative">
          <i className="fa-regular fa-bookmark"></i>
          <span className="position-absolute text-bg-success top-0 start-100 translate-middle badge rounded-pill">
            1
          </span>
        </span>
      </div>
    </div>
  );
};

export default Index;
