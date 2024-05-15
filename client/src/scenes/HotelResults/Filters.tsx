import "../../sass/scenes/_filters.scss";

import { useDispatch } from "react-redux";
import { setFilterBtnOpen } from "../../redux/appSlice";

import Price from "../FlightResults/components/Price";
import Rating from "../FlightResults/components/Rating";
import WithChecks from "../FlightResults/components/WithChecks";

import { closeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const freebies = [
  "Round trip",
  "On Way",
  "Multi-City",
  "My Dates Are Flexible",
];
const amenities = ["Emirated", "Fly Dubai", "Qatar", "Etihad"];

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterClose = () => {
    dispatch(setFilterBtnOpen(false));
  };
  return (
    <div className="filters">
      <div className="filters__title">Filters</div>
      <div className="filters__options">
        <Price />
        <Rating />
        <WithChecks key="city" values={freebies} title="Freebies" />
        <WithChecks key="trip" values={amenities} title="Amenities" />
      </div>
      <button className="filters__closeBtn" onClick={handleFilterClose}>
        <IonIcon icon={closeOutline} style={{ fontSize: "24px" }} />
      </button>
    </div>
  );
};

export default Filters;
