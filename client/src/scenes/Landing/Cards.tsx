import "../../sass/scenes/_cards.scss";

import LandingCardItem from "../../components/LandingCardItem";

import { landingCards as data } from "../../data/landingCards";

const Cards = () => {
  return (
    <div className="plans__card">
      {data.map((cardItem) => (
        <LandingCardItem key={cardItem.id} {...cardItem} />
      ))}
    </div>
  );
};

export default Cards;
