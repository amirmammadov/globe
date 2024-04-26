import { useState } from "react";

import "../../sass/shared/_searchBox.scss";

import ShowBtn from "../../components/ShowBtn";

import FlightsInputs from "../../scenes/FlightsInputs";
import HotelInputs from "../../scenes/HotelInputs";

import { useTranslation } from "react-i18next";

const tabs = ["flight", "stay"];

const SearchBox = () => {
  const [tab, setTab] = useState(tabs[0]);

  const t = useTranslation("global")[0];

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
          <p className="search__tabs__btn__text">
            {t("landing.searchBox.tab1")}
          </p>
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
          <p className="search__tabs__btn__text">
            {t("landing.searchBox.tab2")}
          </p>
        </button>
      </div>
      {tab === tabs[0] ? <FlightsInputs /> : <HotelInputs />}
      {tab === tabs[0] ? (
        <div className="search__btns">
          <ShowBtn
            text={`${t("landing.searchBox.btn1")}`}
            icon="show"
            link="result"
          />
        </div>
      ) : (
        <div className="search__btns">
          <ShowBtn
            text={`${t("landing.searchBox.btn2")}`}
            icon="hotel"
            link="result"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
