import "../../sass/scenes/_plans.scss";

import { cities } from "../../data/cities";

import SectionTitle from "../../components/SectionTitle";

import { useTranslation } from "react-i18next";

const Plans = () => {
  const t = useTranslation("global")[0];

  return (
    <section className="landing__plans">
      <SectionTitle
        title={t("landing.plans.title")}
        desc={t("landing.plans.desc")}
        btnText={t("landing.plans.btn")}
        link="result"
      />
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
