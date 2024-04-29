import "../../sass/scenes/_plans.scss";

import { Link } from "react-router-dom";

import { cities } from "../../constants";

const Plans = () => {
  return (
    <section className="landing__plans">
      <div className="landing__plans__header">
        <div className="landing__plans__header__info">
          <div className="landing__plans__header__info__title">
            Plan your perfect trip
          </div>
          <div className="landing__plans__header__info__desc">
            Search Flights & Places Hire to our most popular destinations
          </div>
        </div>
        <Link to="/result" className="landing__plans__header__btn">
          See more
        </Link>
      </div>
      <div className="landing__plans__content">
        {cities.map((city) => (
          <div key={city.id} className="landing__plans__content__item">
            <div className="landing__plans__content__item__img">
              <img src={`/assets/cities/${city.imgUrl}`} alt={city.title} />
            </div>
            <div className="landing__plans__content__item__info">
              <div className="landing__plans__content__item__info__title">
                {city.title}
              </div>
              <div className="landing__plans__content__item__info__includes">
                {city.features.map((feature, index) => (
                  <div
                    key={index}
                    className="landing__plans__content__item__info__includes__item"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
