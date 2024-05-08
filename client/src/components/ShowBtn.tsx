import { Link } from "react-router-dom";

import "../sass/components/_showBtn.scss";

import { IButton } from "../types";

import { IonIcon } from "@ionic/react";

const ShowBtn = ({ text, icon, link }: IButton) => {
  return (
    <Link to={`/${link}`} className="show">
      <IonIcon icon={icon} />
      <p className="show__text">{text}</p>
    </Link>
  );
};

export default ShowBtn;
