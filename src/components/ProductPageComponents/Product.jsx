import { Heart, Star } from "lucide-react";
import React from "react";
import AccordingProduct from "./According-Product";
import { useParams } from "react-router-dom";
import data from "../../data.json";

const Product = () => {
  const params = useParams();
  const found = data.find((product) => product.id === parseInt(params.id));
  return (
    <div className="my-28 mx-32">
      <div className="flex flex-col mb-8 space-y-2">
        <div className="flex">
          <span className="text-[#1E293B]/50 text-sm">
            Store / {found.category}{" "}
            <span className="text-[#1E293B]">Designers</span>
          </span>
        </div>
        <h1 className="font-semibold text-[#1E293B]">{found.title}</h1>
      </div>

      <div className="flex gap-16">
        <div className="flex-1">
          <img src={found.image} alt="" className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          <h1 className="font-bold text-4xl text-[#1E293B]">{found.title}</h1>
          <h4 className="text-[#1E293B] font-semibold text-2xl">
            ${found.price}
          </h4>
          <span className="text-balance text-[#64748B]">
            {found.description}
          </span>
          <span className="flex gap-2 items-center text-center">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <Star
                fill={index + 1 <= found.stars ? "#F19937" : "#fff"}
                color="#F19937"
                size={24}
              />
            ))}
            <span className="text-[#64748B] text-sm">100 reviews</span>
          </span>
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-[#000000]">Color</h4>
            <div className="flex gap-1">
              <div className="rounded-md w-[22px] h-[22px] bg-white border"></div>
              <div className="rounded-md w-[22px] h-[22px] bg-blue-700"></div>
              <div className="rounded-md w-[22px] h-[22px] bg-red-500"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="rounded-md w-44 h-10 bg-[#1E293B] text-white font-semibold text-sm">
              Add to cart
            </button>
            <Heart size={24} />
          </div>

          <ul className="flex flex-col">
            <AccordingProduct title="Features" />
            <AccordingProduct title="Product care" />
            <AccordingProduct title="Shipping & Returns" />
            <AccordingProduct title="Warranty" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
