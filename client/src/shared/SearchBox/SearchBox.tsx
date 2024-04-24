import { useState } from "react";

import "../../sass/shared/_searchBox.scss";

import OptionsInput from "../../components/OptionsInput";
import DatePicker from "../../components/DatePicker";
import ShowBtn from "../../components/ShowBtn";

import {
  searchFrom,
  searchTo,
  returnType,
  classType,
  passengerTotal,
  // departDate,
  // returnDate,
} from "../../constants";

const tabs = ["flight", "stay"];

const SearchBox = () => {
  const [tab, setTab] = useState(tabs[0]);

  const handleTab = (tabValue: string) => {
    setTab(tabValue);
  };

  return (
    <div className="search">
      <div className="search__tabs">
        <button
          className={`search__tabs__btn ${tab === tabs[0] && "active"}`}
          onClick={() => handleTab(tabs[0])}
        >
          <img
            src="./assets/icons/airplane.png"
            alt="plane"
            className="search__tabs__btn__img"
          />
          <p className="search__tabs__btn__text">Flights</p>
        </button>
        <div className="search__tabs__divider" />
        <button
          className={`search__tabs__btn ${tab === tabs[1] && "active"}`}
          onClick={() => handleTab(tabs[1])}
        >
          <img
            src="./assets/icons/bed.png"
            alt="stays"
            className="search__tabs__btn__img"
          />
          <p className="search__tabs__btn__text">Stays</p>
        </button>
      </div>
      <div className="search__inputs">
        <div className="search__inputs__item">
          <OptionsInput options={searchFrom} holder="From" keyValue="from" />
          <OptionsInput options={searchTo} holder="To" keyValue="to" />
        </div>
        <div className="search__inputs__item">
          <OptionsInput options={returnType} holder="Trip" keyValue="trip" />
        </div>
        <div className="search__inputs__item date">
          <DatePicker holder="Depart" keyValue="depart" />
          <DatePicker holder="Return" keyValue="return" />
        </div>
        <div className="search__inputs__item">
          <OptionsInput
            options={passengerTotal}
            holder="Passengers"
            keyValue="passenger"
          />
          <OptionsInput options={classType} holder="Class" keyValue="class" />
        </div>
      </div>
      <div className="search__btns">
        <ShowBtn text="Show Flights" icon="show" link="result" />
      </div>
    </div>
  );
};

export default SearchBox;
