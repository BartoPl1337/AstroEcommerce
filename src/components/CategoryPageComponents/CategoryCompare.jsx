import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import FilterPanel from "./FilterPanel";
import ProductsSec from "./ProductsSec";

const CategoryCompare = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  return (
    <div className="px-36 mt-8">
      <div className="flex justify-between">
        <h1 className="text-[#1E293B] font-semibold text-3xl">Our Products</h1>
        <div className="flex flex-col relative items-end">
          <h3
            className="flex gap-0.5 font-semibold text-[#000000]"
            onClick={() => setIsSortOpen((prev) => !prev)}
          >
            Sort {!isSortOpen ? <ChevronDown color="#111827" /> : <ChevronUp color="#111827"/>}
          </h3>
          {isSortOpen && (
            <div className="flex flex-col space-y-1.5 font-medium text-[#6C757D] z-10 absolute top-8 items-end w-36 bg-white rounded-lg py-4 pr-2">
              <h3>Cheap to high</h3>
              <h3>High to cheap</h3>
              <h3>Newest to oldest</h3>
              <h3>Oldest to newest</h3>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-7 mt-14">
        <FilterPanel />
        <ProductsSec />
      </div>
    </div>
  );
};

export default CategoryCompare;
