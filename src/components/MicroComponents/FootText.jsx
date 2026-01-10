const FootText = ({
  icon,
  text ,
  style
}) => {
  return (
    <div className={style} >
      <p className="pr-2" >{icon}</p>
      <p>{text}</p>
    </div>
  );
};

export default FootText;
