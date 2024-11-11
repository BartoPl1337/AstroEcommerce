import { Gift } from "lucide-react";
import React from "react";

const DiscountSec = () => {
  return (
    <div className="px-40 flex justify-center mt-32 relative">
      <img src="img.png" alt="" className="object-cover" />
      <div className="absolute flex flex-col space-y-6 items-center top-1/2 -translate-y-1/2">
        <h1 className="font-bold text-5xl text-[#212529]">Exclusive Discounts for Members</h1>
        <h4 className="text-[#1E293B] w-full max-w-[700px] text-center">
          The time is now for it to be okay to be great. People in this world
          shun people for being great. For being a bright color. For standing
          out. But the time is now to be okay to be the greatest you.
        </h4>
        <button className="flex px-6 py-3 items-center text-white bg-[#1E293B] gap-1.5 font-semibold text-[13px] w-[158px] justify-center">
          <Gift size={14} /> Get your code
        </button>
      </div>
    </div>
  );
};

export default DiscountSec;
