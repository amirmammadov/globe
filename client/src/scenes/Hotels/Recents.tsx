import "../../sass/scenes/_recents.scss";

import { useTranslation } from "react-i18next";

import { searches } from "../../data/recentSearches";

const Recents = () => {
  const t = useTranslation("global")[0];

  return (
    <section className="hotel__recents">
      <div className="hotel__recents__title"> {t("hotels.recents.title")}</div>
      <div className="hotel__recents__content">
        {searches.map((search) => (
          <div key={search.id} className="hotel__recents__content__item">
            <div className="hotel__recents__content__item__img">
              <img src={`/assets/hotels/${search.imgUrl}`} alt={search.city} />
            </div>
            <div className="hotel__recents__content__item__info">
              <div className="hotel__recents__content__item__info__title">
                {search.city}
              </div>
              <div className="hotel__recents__content__item__info__places">
                {search.places} places
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recents;
