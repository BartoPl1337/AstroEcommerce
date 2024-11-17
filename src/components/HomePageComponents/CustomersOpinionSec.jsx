import React from "react";
import CustomersOpinion from "./CustomersOpinion";

const CustomersOpinionSec = () => {
  return (
    <div className="px-44 mt-16">
      <div className="flex flex-col space-y-2x">
        <h1 className="text-[#1E293B] font-semibold text-3xl">
          Our customer's opinion
        </h1>
        <h6 className="text-[#64748B] text-lg w-max max-w-[600px]">
          Society has put up so many boundaries, so many limitations on what's
          right and wrong that it's almost impossible to get a pure thought out.
        </h6>
      </div>

      <div className="mt-9 grid grid-cols-3 gap-3 mb-7">
        <CustomersOpinion 
        text = "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment."
        name = "Alexa Liras"
        src="avatar.png"
        stars = {4}
        />
        <CustomersOpinion 
        text = "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment."
        name = "Laurent Perrier"
        src="Avatars.png"
        stars = {5}
        />
        <CustomersOpinion 
        text = "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams."
        name = "Michael Levi"
        src ="Avatars1.png"
        stars = {2}
        />
      </div>
    </div>
  );
};

export default CustomersOpinionSec;
