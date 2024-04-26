import "../sass/scenes/_flightsInputs.scss";

import OptionsInput from "../components/OptionsInput";
import DatePicker from "../components/DatePicker";

import {
  searchFrom,
  searchTo,
  returnType,
  classType,
  passengerTotal,
} from "../constants";

const FlightsInput = () => {
  return (
    <div className="search__flight__inputs">
      <div className="search__flight__inputs__item">
        <OptionsInput options={searchFrom} holder="From" keyValue="from" />
        <OptionsInput options={searchTo} holder="To" keyValue="to" />
      </div>
      <div className="search__flight__inputs__item">
        <OptionsInput options={returnType} holder="Trip" keyValue="trip" />
      </div>
      <div className="search__flight__inputs__item date">
        <DatePicker holder="Depart" keyValue="depart" />
        <DatePicker holder="Return" keyValue="return" />
      </div>
      <div className="search__flight__inputs__item">
        <OptionsInput
          options={passengerTotal}
          holder="Passengers"
          keyValue="passenger"
        />
        <OptionsInput options={classType} holder="Class" keyValue="class" />
      </div>
    </div>
  );
};

export default FlightsInput;
