import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";

const ProductsSec = () => {
  return (
    <div className="grid grid-cols-3 gap-7">
      {data.map((product) => (
        <Link to={`/Products/${product.id}`} key={product.id}>
          <div
            key={product.id}
            className="rounded-2xl flex flex-col shadow-lg px-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-t-2xl object-cover h-[250px]"
            />
            <div className="flex flex-col space-y-3 my-6 text-center">
              <h3 className="font-semibold text-[#6C757D]">
                {product.category}
              </h3>
              <h3 className="text-[#1E293B] font-semibold text-xl">
                {product.title}
              </h3>
              <h3 className="text-[#1E293B] font-semibold text-lg">
                {product.price}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsSec;
