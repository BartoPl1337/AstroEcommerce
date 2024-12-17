import React, { useEffect, useRef, useState } from "react";
import AccordingComponent from "./According-Component";

const FilterPanel = () => {
useEffect(() => {
  fetch("https://api.escuelajs.co/api/v1/categories")
  .then(res => {
    return res.json()
  })
  .then (data => {
    console.log(data)
  })
}, [])
return (
    <div className="w-[600px]">
      <ul className="border-b font-semibold text-xl flex flex-col space-y-3">
        <li>Man</li>
        <li>Woman</li>
        <li>Sales</li>
        <li>Permanent Collections</li>
        <li className="pb-3">New</li>
      </ul>

      <ul className="font-semibold text-xl flex flex-col space-y-3">
          <AccordingComponent
          title="Material"
          items={["Silk", "Tweed", "Wool", "Polyester", "Linem"]}
          />
          <AccordingComponent
          title="Size"
          items={["XS", "S", "M", "L", "XL"]}
          />
      </ul>
    </div>
  );
};

export default FilterPanel;
