import React from "react";
import FoodCard from "./MicroComponents/FoodCard";

const Menu = () => {
  return (
    <div className="flex flex-col w-full " >
      <h1 className="flex text-5xl font-bold pl-4" >Menu</h1>
      <div className="flex w-full pt-4 ">
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default Menu;
