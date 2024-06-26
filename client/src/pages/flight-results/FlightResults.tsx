import { useEffect } from "react";

import "../../sass/pages/_search-results.scss";

import FlightsInput from "../../scenes/FlightsInputs";
import Filters from "../../scenes/FlightResults/Filters";
import FlightResultsContent from "../../scenes/FlightResultsContent/FlightResultsContent";

import { useSelector } from "react-redux";

import { searchOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { IState } from "../../types";

import { useDeviceSize } from "../../hooks/useDeviceSize";

const FlightResults = () => {
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
        <FlightsInput />
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
          <FlightResultsContent />
        </div>
      </div>
    </main>
  );
};

export default FlightResults;
