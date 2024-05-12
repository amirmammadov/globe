import "../../sass/scenes/_filters.scss";

import Price from "./components/Price";
import Departure from "./components/Departure";
import Rating from "./components/Rating";
import WithChecks from "./components/WithChecks";

import { useDispatch } from "react-redux";
import { setFilterBtnOpen } from "../../redux/appSlice";

import { closeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const trips = ["Round trip", "On Way", "Multi-City", "My Dates Are Flexible"];
const cities = ["Emirated", "Fly Dubai", "Qatar", "Etihad"];

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
        <Departure />
        <Rating />
        <WithChecks key="city" values={cities} title="Airlines" />
        <WithChecks key="trip" values={trips} title="Trips" />
      </div>
      <button className="filters__closeBtn" onClick={handleFilterClose}>
        <IonIcon icon={closeOutline} style={{ fontSize: "24px" }} />
      </button>
    </div>
  );
};

export default Filters;
