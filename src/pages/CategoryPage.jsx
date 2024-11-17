import React from "react";
import NavBar from "../components/NavBar";
import CategoryCompare from "../components/CategoryPageComponents/CategoryCompare";

const CategoryPage = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <NavBar />
      <CategoryCompare />
    </div>
  );
};

export default CategoryPage;
