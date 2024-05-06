import "../../sass/pages/_flight-results.scss";

import FlightsInput from "../../scenes/FlightsInputs";
import Filters from "../../scenes/FlightResults/Filters";

import { IonIcon } from "@ionic/react";

const FlightResults = () => {
  return (
    <main className="flight__results">
      <div className="flight__results__inputs">
        <FlightsInput />
        <button className="flight__results__inputs__btn">
          <IonIcon name="search-outline" style={{ fontSize: "20px" }} />
        </button>
      </div>
      <div className="flight__results__show">
        <div className="flight__results__show__filters">
          <Filters />
        </div>
        <div className="flight__results__show__content">content</div>
      </div>
    </main>
  );
};

export default FlightResults;
