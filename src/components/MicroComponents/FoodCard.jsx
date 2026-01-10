import React from "react";
import bir1 from '../../assets/bir1.png'

const FoodCard = ({ foodimg = bir1, foodname = "Chicken biriyani", price = "Rs.170" , description = "Tasty gama gama biriyani" }) => {
  return (
    <div className="flex flex-col w-1/2 border rounded-xl" >
      <div className="" >
        <img src={foodimg}  alt="foodImage" />
      </div>
      <div className="flex flex-col" >
        <h1 className='text-3xl font-semibold' >{foodname}</h1>
        <p>{description}</p>
        <h3 className="text-2xl font-black" >{price}</h3>
      </div>
    </div>
  );
};

export default FoodCard;
