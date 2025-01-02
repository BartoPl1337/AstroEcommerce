import { ChevronsRightIcon, View } from "lucide-react";
import React from "react";
import ViewedProducts from "./ViewedProducts";
import { Link } from "react-router-dom";

const Viewed = () => {
  return (
    <div className="mx-36 my-28">
      <div className="flex justify-between items-center">
        <h1 className="text-[#1E293B] font-semibold text-3xl">
          Recently viewed
        </h1>
        <Link to='/Category' className="flex gap-1.5 items-center">
          <span className="font-medium text-[#1E293B]">See all</span>
          <ChevronsRightIcon size={24} />
        </Link>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8"></div>
      <div className="">
        <ViewedProducts />
      </div>
    </div>
  );
};

export default Viewed;
