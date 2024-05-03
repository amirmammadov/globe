import "../../sass/shared/_hero.scss";
import "../../sass/pages/_landing.scss";

import SearchBox from "../../shared/SearchBox/SearchBox";
import Plans from "../../scenes/Landing/Plans";
import Cards from "../../scenes/Landing/Cards";
import Reviews from "../../scenes/Landing/Reviews";

import { useTranslation } from "react-i18next";

const Landing = () => {
  const t = useTranslation("global")[0];

  return (
    <main className="landing">
      <div className="hero">
        <div className="hero__content">
          <div className="hero__content__info">
            <h3 className="hero__content__info__title">
              {t("landing.hero.title1")}
            </h3>
            <h2 className="hero__content__info__title2">
              {t("landing.hero.title2")}
            </h2>
            <p className="hero__content__info__desc">
              {t("landing.hero.title3")}
            </p>
          </div>
        </div>
        <SearchBox />
      </div>
      <Plans />
      <Cards />
      <Reviews />
    </main>
  );
};

export default Landing;
