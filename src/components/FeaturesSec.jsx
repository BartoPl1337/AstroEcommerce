import { CircleCheck } from "lucide-react";
import React from "react";

const FeaturesSec = () => {
  return (
    <div className="mt-36 px-44">
      <div className="text-center flex flex-col justify-center items-center gap-2">
        <h1 className="text-[#1E293B] font-semibold text-3xl">
          Product Features
        </h1>
        <h3 className="text-[#64748B] text-lg w-full max-w-[600px]">
          Society has put up so many boundaries, so many limitations on what's
          right and wrong that it's almost impossible
        </h3>
      </div>

      <div className="flex mt-28 justify-center">
        <div className="flex flex-col">
          <div className="flex-1 text-[#64748B] flex flex-col space-y-2">
            <h1 className="font-semibold text-[#1E293B] text-2xl">
              Product Description
            </h1>
            <span className="w-full max-w-[550px]">
              Society has put up so many boundaries, so many limitations on
              whats right and wrong that it's almost impossible to get a pure
              thought out. It's like a little kid, a little boy, looking at
              colors, and no one told him what colors are good, before somebody
              tells you you shouldn't like pink because that's for girls, or
              you'd instantly become a gay two-year-old.
            </span>
          </div>
          <div className="flex-1">
            <ul className="text-[#64748B]">
              <li className="flex gap-2.5 py-4 w-full max-w-[550px]">
                <CircleCheck color="#fff" fill="#111827" className="flex-shrink-0" size={20}/> Oli is a primary source of
                energy for various sectors, including transportation,
                industries, and residential use.
              </li>
              <li className="flex gap-2.5 py-4 w-full max-w-[550px]">
                <CircleCheck color="#fff" fill="#111827" className="flex-shrink-0" size={20}/> Oli is highly
                versatile and used in the production of a wide range of
                products. It serves as a raw material for manufacturing plastics
              </li>
              <li className="flex gap-2.5 py-4 w-full max-w-[500px]">
                <CircleCheck color="#fff" fill="#111827" className="flex-shrink-0" size={20}/> Oli is a crucial source of
                petrochemicals, which are used in the production of plastics.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-7">
          <img src="product1.png" alt="" className="object-cover"/>
          <div className="flex gap-7">
            <img src="product2.png" alt="" className="object-cover"/>
            <img src="product3.png" alt="" className="object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSec;
