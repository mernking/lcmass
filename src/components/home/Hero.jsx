import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./nav.css";

export default function Hero() {
  return (
    <div className="kingshero w-full text-text">
      <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
        <div className="herotxt px-4 font-bold text-6xl text-center">
          <h1>
            Manage your shopify
            <br />
            store at ease
          </h1>
        </div>
        {/* <div className="heromsg text-sm px-4 sm:text-[15px]">
          <p>
            lcmass the only solution for shopify management you will ever need.
            sales, customers, product and more with ease and no stress. from
            both mobile and web app
          </p>
        </div> */}
        <div className="cta w-full py-2 flex gap-[2%] justify-center">
          <button className="ctabtn px-2 py-1 text-sm">
            <p>let get started</p>
          </button>

          <button className="ctabtnf px-2 py-1 text-sm">
            <p>see features</p>
          </button>
        </div>
      </div>
    </div>
  );
}
