import React from "react";
import FoodCard from "./MicroComponents/FoodCard";
import '../index.css'

const Menu = () => {
  return (
    <div className="flex flex-col w-full " >
      <div className="flex text-5xl font-bold pl-4 " id="menu" ><h1 className="underline decoration-4 underline-offset-8 decoration-[#7a5c00] text-[#5c4b00] " >Menu</h1></div>
      <div className="flex w-full pt-4 ">
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default Menu;
