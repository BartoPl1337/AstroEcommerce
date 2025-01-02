import React from "react";
import { useAtom } from "jotai";
import { shoppingCart, getTotal } from "../../atom";

const List = () => {
  return (
    <div>
      <div className="flex gap-8">
        <img
          src="koszula.jpg"
          alt=""
          className="h-[200px] w-[200px] object-fill"
        />

        <div className="flex gap-12">
          <div className="flex flex-col space-y-2">
            <h3 className="text-[#1E293B] font-semibold text-xl">
              Premium Suit
            </h3>
            <div className="text-[#64748B] gap-6 flex">
              <span>Linen</span>
              <span>Size: M</span>
            </div>
          </div>
          <select name="" id="" className="text-[#1E293B] w-10 h-10">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <h2 className="text-[#1E293B] font-semibold text-2xl">$...</h2>
        </div>
      </div>
    </div>
  );
};

export default List;
