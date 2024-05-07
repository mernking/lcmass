import React from 'react'

export default function Workings() {
  return (
    <div>
      <div className="title text-3xl font-bold text-center">
        <h6>How it works</h6>
      </div>
      <div className="text-center">
        <p>A simple way to maintain and manage your shopify stores</p>
      </div>
      <div className="how flex flex-wrap gap-[3%] px-2">
        <div className="howcard">
          <span></span>
          <p>map resource from your shopify store</p>
        </div>
        <div className="howcard">
          <span></span>
          <p>manage your stores data in one place without stress</p>
        </div>
        <div className="howcard">
          <span></span>
          <p>connect from any device of your choice</p>
        </div>
      </div>
    </div>
  );
}
