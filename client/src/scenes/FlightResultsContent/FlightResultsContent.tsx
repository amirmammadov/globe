import "../../sass/scenes/_flightResultsContent.scss";

import ResultsTabs from "./components/ResultsTabs";
import FlightResultItem from "../../components/FlightResultItem";

import { airlinesResult } from "../../data/airlines";

const FlightResultsContent = () => {
  return (
    <div className="resultContent">
      <ResultsTabs />
      <div className="resultContent__total">
        Showing 4 of <span> 257 places</span>
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
