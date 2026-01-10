import React from "react";

const FootText = ({
  icon,
  text ,
}) => {
  return (
    <div className="flex items-start pr-2 text-left">
      <p>{icon}</p>
      <p>{text}</p>
    </div>
  );
};

export default FootText;
