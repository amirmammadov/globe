import { Link } from "react-router-dom";

import "../sass/components/_showBtn.scss";

import { IButton } from "../types";

const ShowBtn = ({ text, icon, link }: IButton) => {
  return (
    <Link to={`/${link}`} className="show">
      <img src={`./assets/icons/${icon}.png`} alt="bed" className="show__img" />
      <p className="show__text">{text}</p>
    </Link>
  );
};

export default ShowBtn;
