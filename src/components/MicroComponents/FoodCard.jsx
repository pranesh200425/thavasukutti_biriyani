import React from "react";
import bir1 from '../../assets/bir1.png' 
import '../../App.css'

const FoodCard = ({ foodimg = bir1, foodname = "Chicken biriyani", price = "Rs.170" , description = "Tasty gama gama biriyani" }) => {
  return (
    <div className="flex flex-col overflow-hidden w-1/2 m-2 rounded-xl relative" >
      <div className="min-h-72 bg-[#0e1111]" >
        <img src={foodimg}  alt="foodImage" />
      </div>
      <div className="flex flex-col w-full p-4 absolute bottom-0" id="glass_bg" >
        <h1 className='text-2xl font-semibold' >{foodname}</h1>
        <h3 className="text-xl font-black text-white" >{price}</h3>
      </div>
    </div>
  );
};

export default FoodCard;
