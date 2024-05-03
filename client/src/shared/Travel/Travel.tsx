import "../../sass/shared/_travel.scss";

import SectionTitle from "../../components/SectionTitle";

import { travelList } from "../../data/travel";

import { useTranslation } from "react-i18next";

const Travel = () => {
  const t = useTranslation("global")[0];

  return (
    <section className="travel">
      <SectionTitle
        title={t("flights.travel.title")}
        desc={t("flights.travel.desc")}
        btnText={t("flights.travel.btnText")}
        link="result"
      />
      <div className="travel__content">
        {travelList.map((travel) => (
          <div key={travel.id} className="travel__content__item">
            <div className="travel__content__item__img">
              <img src={`/assets/flights/${travel.imgUrl}`} alt={travel.city} />
            </div>
            <div className="travel__content__item__content">
              <div className="travel__content__item__content__info">
                <div className="travel__content__item__content__info__text">
                  <div className="travel__content__item__content__info__text__title">
                    {travel.city}
                  </div>
                  <div className="travel__content__item__content__info__text__desc">
                    {travel.desc}
                  </div>
                </div>
                <div className="travel__content__item__content__info__price">
                  $ {travel.price}
                </div>
              </div>
              <button className="travel__content__item__content__btn">
                Book Flight
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Travel;
