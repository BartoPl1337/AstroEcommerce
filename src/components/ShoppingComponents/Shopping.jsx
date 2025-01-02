import React from "react";
import OrderSummary from "./OrderSummary";
import List from "./List";

const Shopping = () => {
  return (
    <div className="p-24">
      <div className="text-center flex flex-col space-y-3 mb-36">
        <h1 className="text-[#1E293B] text-4xl font-bold">
            Shopping Cart
        </h1>
        <span className="text-[#6C757D] font-semibold text-xl">
            You are eligible for free shipping
        </span>
      </div>
      <div className="flex">
        <div className="flex"></div>
            <List />
        <div className="space-y-6 flex-1 flex justify-end">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Shopping;
