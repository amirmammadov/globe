import "../../sass/shared/_hero.scss";
import "../../sass/pages/_flights.scss";

import SearchBox from "../../shared/SearchBox/SearchBox";

const Flights = () => {
  return (
    <main className="flights">
      <div className="hero">
        <div className="hero__content">
          <div className="hero__content__info">
            <div className="hero__content__info__title">
              Make your travel whishlist, we'll do the rest
            </div>
            <div className="hero__content__info__desc">
              Special offers to suit your plan
            </div>
          </div>
        </div>
        <SearchBox />
      </div>
    </main>
  );
};

export default Flights;
