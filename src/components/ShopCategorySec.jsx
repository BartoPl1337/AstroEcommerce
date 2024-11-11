import { ChevronRight } from "lucide-react";
import React from "react";

const ShopCategorySec = () => {
  return (
    <div className="mt-36">
      <div className="flex flex-col items-center space-y-2 mb-12">
        <h2 className="font-semibold text-3xl text-[#1E293B]">Shop Category</h2>
        {/*Ma byc Link */}
        <div className="flex items-center text-[#1E293B]">
          <h4 className="font-medium ">Browse all categories</h4>
          <ChevronRight />
        </div>
      </div>

        <div className="grid cols-4">
            
        </div>
    </div>
  );
};

export default ShopCategorySec;
