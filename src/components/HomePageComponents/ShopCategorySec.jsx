import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ShopCategoryCart from "./ShopCategoryCart";

const ShopCategorySec = () => {
  return (
    <div className="mt-36 px-[136px] ">
      <div className="flex flex-col items-center space-y-2 mb-12">
        <h2 className="font-semibold text-3xl text-[#1E293B]">Shop Category</h2>
        <div className="flex items-center text-[#1E293B]">
          <h4 className="font-medium ">
            <Link to="/Category">Browse all categories</Link>
          </h4>
          <ChevronRight />
        </div>
      </div>
        <div className="grid grid-cols-4 py-2 px-14 gap-7">
          <ShopCategoryCart src="pre-fall.png" />
          <ShopCategoryCart src="sale.png" />
          <ShopCategoryCart src="summer.png" />
          <ShopCategoryCart src="sale.png" />
        </div>
    </div>
  );
};

export default ShopCategorySec;
