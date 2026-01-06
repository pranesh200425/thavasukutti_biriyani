import React from "react";

const FoodCard = ({ foodimg, foodname, price, description }) => {
  return (
    <div>
      <div>
        {" "}
        <img src={foodimg} alt="foodImage" />{" "}
      </div>
      <div>
        <h1>{foodname}</h1>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default FoodCard;
