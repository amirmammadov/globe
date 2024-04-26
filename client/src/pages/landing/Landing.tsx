import "../../sass/pages/_landing.scss";

import SearchBox from "../../shared/SearchBox/SearchBox";

import { useTranslation } from "react-i18next";

const Landing = () => {
  const t = useTranslation("global")[0];

  return (
    <main className="landing">
      <div className="landing__hero">
        <div className="landing__hero__content">
          <div className="landing__hero__content__info">
            <h3 className="landing__hero__content__info__title3">
              {t("landing.hero.title1")}
            </h3>
            <h2 className="landing__hero__content__info__title2">
              {t("landing.hero.title2")}
            </h2>
            <p className="landing__hero__content__info__text">
              {t("landing.hero.title3")}
            </p>
          </div>
        </div>
        <SearchBox />
      </div>
    </main>
  );
};

export default Landing;
