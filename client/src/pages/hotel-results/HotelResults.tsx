import { useEffect } from "react";

import "../../sass/pages/_search-results.scss";

import HotelInputs from "../../scenes/HotelInputs";
import Filters from "../../scenes/HotelResults/Filters";
import HotelResultsContent from "../../scenes/HotelResultsContent/HotelResultsContent";

import { useSelector } from "react-redux";

import { IState } from "../../types";

import { searchOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { useDeviceSize } from "../../hooks/useDeviceSize";

const HotelResults = () => {
  const filterBtnOpen = useSelector((state: IState) => state.filterBtnOpen);

  const width = useDeviceSize()[0];

  useEffect(() => {
    if (filterBtnOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [width, filterBtnOpen]);

  return (
    <main className="search__results">
      <div className="search__results__inputs">
        <HotelInputs />
        <button className="search__results__inputs__btn">
          <IonIcon icon={searchOutline} style={{ fontSize: "20px" }} />
        </button>
      </div>
      <div className="search__results__show">
        <div
          className={`search__results__show__filters ${
            filterBtnOpen && "active"
          }`}
        >
          <Filters />
        </div>
        <div className="search__results__show__content">
          <HotelResultsContent />
        </div>
      </div>
    </main>
  );
};

export default HotelResults;
