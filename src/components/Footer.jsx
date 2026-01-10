import React from "react";s
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import FootText from "./MicroComponents/footText";

const Footer = () => {
  return (
    <div className="flex flex-col mt-4 bg-[#0e1111] justify-center p-4 ">
      <div className="text-2xl font-bold text-[#FDFDFD]">
        <FootText
          icon={<FontAwesomeIcon icon={faLocationDot} />}
          text="No : 43/7, Shanthiniketan Colony, Near HP Petrol Bunk,
          Anna Nagar West Extn., 
            Thirumangalam, Chennai-600101"
        />
        <FootText
          icon={<FontAwesomeIcon icon={faPhone} />}
          text="9994305012"
        />
        <FootText
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          text="contact@thavusukuttibiryani.com"
        />
        <FootText
          icon={<FontAwesomeIcon icon={faGlobe} />}
          text="www.thavusukuttibiryani.com"
        />
      </div>
    </div>
  );
};

export default Footer;
