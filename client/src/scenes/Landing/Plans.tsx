import "../../sass/scenes/_plans.scss";

import { Link } from "react-router-dom";

import { cities } from "../../constants";

import { useTranslation } from "react-i18next";

const Plans = () => {
  const t = useTranslation("global")[0];

  return (
    <section className="landing__plans">
      <div className="landing__plans__header">
        <div className="landing__plans__header__info">
          <div className="landing__plans__header__info__title">
            {t("landing.plans.title")}
          </div>
          <div className="landing__plans__header__info__desc">
            {t("landing.plans.desc")}
          </div>
        </div>
        <Link to="/result" className="landing__plans__header__btn">
          {t("landing.plans.btn")}
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
