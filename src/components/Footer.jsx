import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import FootText from "./MicroComponents/FootText.jsx";

const Footer = () => {
  return (
    <div className="flex flex-col mt-4 bg-[#0e1111] justify-center p-4 ">
      <div className="flex flex-col  font-bold text-[#FDFDFD]">
        <FootText
          icon={<FontAwesomeIcon icon={faLocationDot} />}
          text="No : 43/7, Shanthiniketan Colony, Near HP Petrol Bunk,
          Anna Nagar West Extn., 
            Thirumangalam, Chennai-600101"
        style = "flex"
        />
        <FootText
          icon={<FontAwesomeIcon icon={faPhone} />}
          text="9994305012"
          style = "flex"
        />
        <FootText
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          text="contact@thavusukuttibiryani.com"
          style = "flex"
        />
        <FootText
          icon={<FontAwesomeIcon icon={faGlobe} />}
          text="www.thavusukuttibiryani.com"
          style = "flex"
        />
      </div>
    </div>
  );
};

export default Footer;
