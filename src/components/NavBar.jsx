import { BadgeEuro, ChevronDown, Heart, Search, ShoppingBag } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="px-20 flex items-center py-2.5">
        <h1 className="font-bold text-sm text-[#1E293B] pl-7 flex-1">Astro Ecommerce</h1>

        <ul className="flex-1 gap-6 flex justify-center">
          <li className="font medium hover:text-[#1E293B] text-[#64748B]">
            Store
          </li>
          <li className="font medium hover:text-[#1E293B] text-[#64748B]">
            Designers
          </li>
          <li className="font medium hover:text-[#1E293B] text-[#64748B]">
            Categories
          </li>
        </ul>
        <div className="flex items-center gap-2 pr-7 flex-1 justify-end">
          <ul className="flex gap-1 text-gray-700">
            <li className="p-2">
              <Search />
            </li>
            <li className="p-2">
              <ShoppingBag />
            </li>
            <li className="p-2">
              <Heart />
            </li>
            <li className="flex items-center p-2">
              <BadgeEuro /> <ChevronDown />
            </li>
          </ul>
          <button className="p-1 text-[#1E293B]">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
