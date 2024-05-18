import "../sass/components/_flightResultItem.scss";

import { heartOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { Link } from "react-router-dom";

interface Direction {
  id: number;
  time: string;
  isStop: string;
  duration: string;
  directionCase: string;
}

interface IProps {
  id: number;
  airline: string;
  imgUrl: string;
  rating: number;
  reviewCount: number;
  startFrom: number;
  directions: Direction[];
}

const FlightResultItem = ({
  airline,
  imgUrl,
  rating,
  reviewCount,
  startFrom,
  directions,
}: IProps) => {
  return (
    <div className="resultItem">
      <div className="resultItem__img">
        <img src={`/assets/airlines/${imgUrl}`} alt={airline} />
      </div>
      <div className="resultItem__info">
        <div className="resultItem__info__headline">
          <div className="resultItem__info__headline__rating">
            <div className="resultItem__info__headline__rating__total">
              {rating}
            </div>
            <div className="resultItem__info__headline__rating__text">
              Very Good
            </div>
            <div className="resultItem__info__headline__rating__count">
              {reviewCount} reviews
            </div>
          </div>
          <div className="resultItem__info__headline__startPrice">
            <div className="resultItem__info__headline__startPrice__text">
              starting from
            </div>
            <div className="resultItem__info__headline__startPrice__price">
              ${startFrom}
            </div>
          </div>
        </div>
        <div className="resultItem__info__options">
          {directions.map((direction) => (
            <div key={direction.id} className="resultItem__info__options__item">
              <input type="checkbox" />
              <div className="resultItem__info__options__item__time">
                <div className="resultItem__info__options__item__time__hours">
                  {direction.time}
                </div>
                <div className="resultItem__info__options__item__time__airline">
                  {airline}
                </div>
              </div>
              <div className="resultItem__info__options__item__stop">
                {direction.isStop ? "non-stop" : "stop"}
              </div>
              <div className="resultItem__info__options__item__total">
                <div className="resultItem__info__options__item__total__hour">
                  {direction.duration}
                </div>
                <div className="resultItem__info__options__item__total__case">
                  {direction.directionCase}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="resultItem__info__divider" />
        <div className="resultItem__info__bottomline">
          <button className="resultItem__info__bottomline__icon">
            <IonIcon icon={heartOutline} style={{ fontSize: "20px" }} />
          </button>
          <Link
            to="/flight-result/1"
            className="resultItem__info__bottomline__btn"
          >
            View Deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightResultItem;
