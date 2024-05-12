import { useEffect } from "react";

import "../../sass/pages/_flight-results.scss";

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
    <main className="flight__results">
      <div className="flight__results__inputs">
        <FlightsInput />
        <button className="flight__results__inputs__btn">
          <IonIcon icon={searchOutline} style={{ fontSize: "20px" }} />
        </button>
      </div>
      <div className="flight__results__show">
        <div
          className={`flight__results__show__filters ${
            filterBtnOpen && "active"
          }`}
        >
          <Filters />
        </div>
        <div className="flight__results__show__content">
          <FlightResultsContent />
        </div>
      </div>
    </main>
  );
};

export default FlightResults;
