import "../../sass/scenes/_flightResultsContent.scss";

import ResultsTabs from "./components/ResultsTabs";
import FlightResultItem from "../../components/FlightResultItem";

import { airlinesResult } from "../../data/airlines";

import { filterOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { useDispatch } from "react-redux";
import { setFilterBtnOpen } from "../../redux/appSlice";

const FlightResultsContent = () => {
  const dispatch = useDispatch();

  const handleFilterOpen = () => {
    dispatch(setFilterBtnOpen(true));
  };

  return (
    <div className="resultContent">
      <ResultsTabs />
      <div className="resultContent__line">
        <div className="resultContent__line__total">
          Showing 4 of <span> 257 places</span>
        </div>
        <button
          className="resultContent__line__filterBtn"
          onClick={handleFilterOpen}
        >
          <IonIcon icon={filterOutline} style={{ fontSize: "22px" }} />
        </button>
      </div>
      <div className="resultContent__result">
        {airlinesResult.map((airline) => (
          <FlightResultItem key={airline.id} {...airline} />
        ))}
      </div>
      <button className="resultContent__moreBtn">See more results</button>
    </div>
  );
};

export default FlightResultsContent;
