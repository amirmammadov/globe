import "../../sass/pages/_landing.scss";

import SearchBox from "../../shared/SearchBox/SearchBox";

const Landing = () => {
  return (
    <main className="landing">
      <div className="landing__hero">
        <div className="landing__hero__content">
          <div className="landing__hero__content__info">
            <h3 className="landing__hero__content__info__title3">
              Helping Others
            </h3>
            <h2 className="landing__hero__content__info__title2">
              Live & Travel
            </h2>
            <p className="landing__hero__content__info__text">
              Special offers to suit your plan
            </p>
          </div>
        </div>
        <SearchBox />
      </div>
    </main>
  );
};

export default Landing;
