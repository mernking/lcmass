import React from "react";
import "./nav.css"


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
        <div className="heromsg px-4">
          <p>
            lcmass the only solution for shopify management you will ever need.
            sales, customers, product and more with ease and no stress. from
            both mobile and web app
          </p>
        </div>
      </div>
    </div>
  );
}
