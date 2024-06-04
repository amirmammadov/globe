import { useState } from "react";

import "../../sass/scenes/_overview.scss";

import { hotelAdvants } from "../../data/hotels";

import { star } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Overview = () => {
  const [isMore, setIsMore] = useState(false);

  const text = `Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus
Hotel Istanbul has risen from the ashes of the historic Park Hotel,
which also served as Foreign Affairs Palace 120 years ago and is hosting
its guests by assuming this hospitality mission. With its 452 luxurious
rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms
including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls
largest terrace with Bosphorus view (4500 m2) and latest technology
infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the
popular attraction point of the city. Room and suite categories at
various sizes with city and Bosphorus view, as well as 68 separate
luxury suites, are offered to its special guests as a wide variety of
selection.`;

  const handleShowMore = () => {
    setIsMore(!isMore);
  };

  return (
    <div className="hotel__overview">
      <div className="hotel__overview__title">Overview</div>
      <div className="hotel__overview__desc">
        {isMore ? text : text.slice(0, 400) + "..."}
        <span>
          <button
            className="hotel__overview__desc__btn"
            onClick={handleShowMore}
          >
            {isMore ? "Show less" : "Show more"}
          </button>
        </span>
      </div>
      <div className="hotel__overview__advants">
        <div className="hotel__overview__advants__rating">
          <div className="hotel__overview__advants__rating__score">4.2</div>
          <div className="hotel__overview__advants__rating__result">
            Very good
          </div>
          <div className="hotel__overview__advants__rating__text">
            371 reviews
          </div>
        </div>
        {hotelAdvants.map((advant, index) => (
          <div key={index} className="hotel__overview__advants__item">
            <div className="hotel__overview__advants__item__icon">
              <IonIcon icon={star} style={{ fontSize: "24px" }} />
            </div>
            <div className="hotel__overview__advants__item__text">{advant}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
