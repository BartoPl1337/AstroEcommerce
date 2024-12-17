import { Star } from "lucide-react";
import React from "react";

const CustomersOpinion = (props) => {
  return (
    <div className="shadow-2xl">
      <div className="my-6 px-6 flex flex-col space-y-4">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <Star
              fill={index + 1 <= props.stars ? "#F19937" : "#fff"}
              color="#F19937"
            />
          ))}
        </div>
        <span className="text-[#64748B] text-balance">
          {props.text}
        </span>
        <div className="flex gap-1.5 items-center">
          <img src={props.src} alt="" className="w-8 h-8 rounded-full" />
          <h4 className="font-semibold text-[#1E293B]">{props.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default CustomersOpinion;
