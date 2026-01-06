import React from "react";

import bir1 from "../assets/bir1.png";
import bir2 from "../assets/bir2.png";
import bir3 from "../assets/bir3.png";
import bir4 from "../assets/bir4.png";

import "../App.css";

const Carosal = () => {
  return (
    <div className="flex items-center justify-center mt-3 pt-1 pb-1">
      <div className="flex min-h-80 min-w-[20rem] items-center justify-center shadow-inner bg-amber-300 rounded-full relative overflow-hidden">
        <div
          className=" h-full w-full flex flex-col overflow-visible absolute top-[95%] items-center justify-center " /* id='carousal' */
        >
          <div className="  flex flex-col aspect-square h-full w-full overflow-visible relative items-center justify-center "  >

            <div className="absolute rotate-180 top-[100%] w-96 ">
              {" "}
              <img src={bir1}  alt="Biriyani 1"  />{" "}
            </div>
            <div className="absolute bottom-[100%] w-96 ">
              {" "}
              <img src={bir2} alt="Biriyani 2" />{" "}
            </div>
            <div className="absolute w-96 rotate-90 left-[100%] ">
              {" "}
              <img src={bir3} alt="Biriyani 3" />{" "}
            </div>
            <div className="absolute w-96 -rotate-90  right-[100%] ">
              {" "}
              <img src={bir4} alt="Biriyani 4" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosal;
