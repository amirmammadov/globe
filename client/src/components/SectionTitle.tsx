import { Link } from "react-router-dom";

import "../sass/components/_sectionTitle.scss";

interface IProps {
  title: string;
  desc: string;
  btnText: string;
  link: string;
}

const SectionTitle = ({ title, desc, btnText, link }: IProps) => {
  return (
    <div className="section__header">
      <div className="section__header__info">
        <div className="section__header__info__title">{title}</div>
        <div className="section__header__info__desc">{desc}</div>
      </div>
      <Link to={`/${link}`} className="section__header__btn">
        {btnText}
      </Link>
    </div>
  );
};

export default SectionTitle;
