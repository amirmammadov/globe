import "../../sass/shared/_imgSlider.scss";

import SectionTitle from "../../components/SectionTitle";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const ImgSlider = () => {
  const t = useTranslation("global")[0];

  return (
    <section className="imgSlider">
      <SectionTitle
        title={t("flights.travel.title")}
        desc={t("flights.travel.desc")}
        btnText={t("flights.travel.btnText")}
        link="result"
      />
      <div className="imgSlider__content">
        <div className="imgSlider__content__info">
          <div className="imgSlider__content__info__header">
            <div className="imgSlider__content__info__header__title">
              {t("flights.imgSlider.title")}
            </div>
            <div className="imgSlider__content__info__header__card">
              <div className="imgSlider__content__info__header__card__text">
                {t("flights.imgSlider.cardText")}
              </div>
              <div className="imgSlider__content__info__header__card__price">
                $700
              </div>
            </div>
          </div>
          <div className="imgSlider__content__info__desc">
            {t("flights.imgSlider.desc")}
          </div>
          <Link to="#" className="imgSlider__content__info__link">
            {t("flights.imgSlider.btnText")}
          </Link>
        </div>
        <div className="imgSlider__content__imgs">
          <div className="imgSlider__content__imgs__item">
            <img src="/assets/flights/sri-lanka1.jpg" alt="sri_lanka" />
          </div>
          <div className="imgSlider__content__imgs__item">
            <img src="/assets/flights/sri-lanka2.jpg" alt="sri_lanka" />
          </div>
          <div className="imgSlider__content__imgs__item">
            <img src="/assets/flights/sri-lanka3.jpg" alt="sri_lanka" />
          </div>
          <div className="imgSlider__content__imgs__item">
            <img src="/assets/flights/sri-lanka4.jpg" alt="sri_lanka" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgSlider;
