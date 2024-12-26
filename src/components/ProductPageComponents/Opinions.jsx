import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Opinionsection from "./Opinion-section";
import Stars from "./Stars";

const Opinions = () => {
  return (
    <div className="mx-36">
      <div className="flex flex-col items-center">
        <h1 className="text-[#1E293B] text-3xl">Our Customer's Opinion</h1>
        <span className="text-[#64748B] text-lg max-w-[700px] text-center">
          Society has put up so many boundaries, so many limitations on waht's
          right and wrong that it's almost impossible to get a pure thought out.
        </span>
      </div>

      <div className="flex my-32 gap-14">
        <div className="w-1/3 flex flex-col space-y-10">
          <h1 className="text-[#1E293B] font-bold text-3xl">Client Reviews</h1>
          <div className="flex gap-1.5 items-center">
            <span className="text-[#64748B] font-extrabold">4.7</span>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Star
                fill={index + 1 <= 4.7 ? "#F19937" : "#fff"}
                color="#F19937"
                size={24}
              />
            ))}
            <span className="text-[#64748B] text-sm">Based on x reviews</span>
          </div>

          <div className="flex flex-col space-y-2">
            <Stars star="5" procent={75} opinions={2} />
            <Stars star="4" procent={90} opinions={30} />
            <Stars star="3" procent={50} opinions={50} />
            <Stars star="2" procent={0} opinions={0} />
            <Stars star="1" procent={25} opinions={1} />
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-[#1E293B] font-semibold text-xl">
              We value your opinion
            </h4>
            <span className="text-[#64748B]">
              The time is now for it to be okay to be great. People in this
              world shun people for being great.
            </span>
          </div>

          <Link to="" className="mt-11">
            <button className="rounded-md bg-[#1E293B] text-[#FFFFFF] w-full py-3">
              Write a review
            </button>
          </Link>
        </div>

        <div className="w-2/3 flex flex-col space-y-8">
          <Opinionsection date="03 March 2022" id={1} />
          <Opinionsection date="23 May 2021" id={3} />
          <Opinionsection id={4} date="30 December 2019" />
        </div>
      </div>
    </div>
  );
};

export default Opinions;
