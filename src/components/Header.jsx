import React from "react";
import '../index.css'

const Header = () => {  

  return (
    <div className="w-full flex flex-col items-center justify-center p-2 ">
      <div className="bg-[#252525] pr-2 pl-2 pt-4 pb-4 rounded-4xl ">
        <div className="text-5xl min-[440px]:text-7xl min-[768px]:text-[12rem]  ">
          <p className="tracking-wider text-yellow-300" id="headerText">MISSING AUTHENTIC BIRIYANI??? </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
