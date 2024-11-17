import { Minus, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const FilterPanel = () => {
  let openRef = useRef(false);
  const [test, setTest] = useState(null)
  console.log(openRef)
  console.log(openRef.current)
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
        <li>New</li>
      </ul>

      <ul className="font-semibold text-xl flex flex-col space-y-3">
        <li className="border-b mt-3">
          <span
            className="flex justify-between"
            onClick={() => setTest(openRef = !openRef)}
          >
            Material {openRef.current ? <Plus /> : <Minus />}
          </span>
          {!openRef.current && (
            <ul className="flex flex-col text-[#64748B] text-lg">
              <li>Leather</li>
              <li>Canvas</li>
            </ul>
          )}
        </li>

        <li className="border-b">
          <span
            className="flex justify-between"
            onClick={() => setTest(openRef = !openRef)}
          >
            Material {openRef ? <Plus /> : <Minus />}
          </span>
          {!openRef && (
            <ul className="flex flex-col text-[#64748B] text-lg">
              <li>Leather</li>
              <li>Canvas</li>
            </ul>
          )}
        </li>

        <li className="border-b">
          <span
            className="flex justify-between"
            onClick={() => setTest(openRef = !openRef)}
          >
            Material {test ? <Plus /> : <Minus />}
          </span>
          {!test && (
            <ul className="flex flex-col text-[#64748B] text-lg">
              <li>Leather</li>
              <li>Canvas</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FilterPanel;
