import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import data from "../../data.json";
import { Link } from "react-router-dom";

const ViewedProducts = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue, removeValue] = useLocalStorage(
    "visitedProducts",
    null
  );
  console.log(products);
  useEffect(() => {
    if (value === null) {
      return;
    }
    value.forEach((element) => {
      data.find((product) => {
        if (product.id === element) {
          setProducts((prev) => [...prev, product]);
        }
      });
    });
  }, []);
  return (
    <div className="flex gap-6 justify-center">
      {products.slice(0, 3).map((product) => (
        <Link to={`/Products/${product.id}`} key={product.id}>
          <div
            key={product.id}
            className="rounded-2xl flex w-[450px] flex-col shadow-lg px-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-t-2xl object-cover h-[500px]"
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

export default ViewedProducts;
