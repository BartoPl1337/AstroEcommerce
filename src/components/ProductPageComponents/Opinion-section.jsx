import { Star } from "lucide-react";
import React from "react";

const Opinionsection = (props) => {
  return (
    <div className="space-y-6 flex flex-col">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star, index) => (
          <Star
            fill={index + 1 <= props.star ? "#F19937" : "#fff"}
            color="#F19937"
            size={24}
          />
        ))}
      </div>
      <span className="text-[#64748B] text-balance">{props.desc}</span>
      <div className="flex gap-2 items-center">
        <img src={props.img} alt="avatar" className="h-12 w-12 rounded-full"/>
        <div className="flex flex-col space-y-1">
            <span className="text-[#1E293B] font-semibold">{props.name}</span>
            <span className="text-[#64748B]">{props.date}</span>
        </div>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8"></div>
    </div>
  );
};

export default Opinionsection;
