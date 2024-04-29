import "../sass/components/_landingCardItem.scss";

import ShowBtn from "./ShowBtn";

interface IProps {
  imgUrl: string;
  title: string;
  desc: string;
}

const landingCardItem = ({ imgUrl, title, desc }: IProps) => {
  return (
    <div className="plans__card__item">
      <img
        src={`./assets/landing/${imgUrl}`}
        alt={title}
        className="plans__card__item__img"
      />
      <div className="plans__card__item__content">
        <div className="plans__card__item__content__title">{title}</div>
        <div className="plans__card__item__content__desc">{desc}</div>
        <ShowBtn text={`Show ${title}`} icon="show" link="result" />
      </div>
      <div className="plans__card__item__overlay" />
    </div>
  );
};

export default landingCardItem;
