import "../../sass/scenes/_cards.scss";

import LandingCardItem from "../../components/LandingCardItem";

const data = [
  {
    id: 1,
    imgUrl: "card2.png",
    title: "flights",
    desc: "Search Flights & Places Hire to our most popular destinations",
  },
  {
    id: 2,
    imgUrl: "card1.png",
    title: "hotels",
    desc: "Search hotels & Places Hire to our most popular destinations",
  },
];

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
