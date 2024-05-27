import "../sass/components/_hotelResultItem.scss";

import { location as locationIcon, star, cafe, heart } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  aminities: number;
  startingPrice: number;
  stars: number;
  mainImgUrl: string;
}

const HotelResultItem = ({
  title,
  location,
  rating,
  reviewCount,
  aminities,
  startingPrice,
  stars,
  mainImgUrl,
}: IProps) => {
  return (
    <div className="hotelItem">
      <div className="hotelItem__img">
        <img src={`./assets/hotels/${mainImgUrl}`} alt="hotel" />
        <div className="hotelItem__img__count">9 images</div>
      </div>
      <div className="hotelItem__content">
        <div className="hotelItem__content__header">
          <div className="hotelItem__content__header__info">
            <div className="hotelItem__content__header__info__title">
              {title}
            </div>
            <div className="hotelItem__content__header__info__desc">
              <IonIcon icon={locationIcon} style={{ fontSize: "16px" }} />
              <p>{location}</p>
            </div>
          </div>
          <div className="hotelItem__content__header__price">
            <span>starting from</span> ${startingPrice}
            <span>/night</span>
            <span>excl. tax</span>
          </div>
        </div>
        <div className="hotelItem__content__general">
          <div className="hotelItem__content__general__stars">
            {[...Array(stars).keys()].map((_, index) => (
              <IonIcon key={index} icon={star} />
            ))}
            <div className="hotelItem__content__general__stars__text">
              {stars} Start Hotel
            </div>
          </div>
          <div className="hotelItem__content__general__amenity">
            <IonIcon icon={cafe} style={{ fontSize: "16px" }} />
            <div className="hotelItem__content__general__amenity__text">
              {aminities} amenities
            </div>
          </div>
        </div>
        <div className="hotelItem__content__rating">
          <div className="hotelItem__content__rating__item">{rating}</div>
          <div className="hotelItem__content__rating__case">Very Good</div>
          <div className="hotelItem__content__rating__total">
            {reviewCount} reviews
          </div>
        </div>
        <div className="hotelItem__content__divider" />
        <div className="hotelItem__content__bottom">
          <div className="hotelItem__content__bottom__icon">
            <IonIcon icon={heart} style={{ fontSize: "20px" }} />
          </div>
          <Link
            to="/hotel-result/5"
            className="hotelItem__content__bottom__btn"
          >
            View Place
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelResultItem;
