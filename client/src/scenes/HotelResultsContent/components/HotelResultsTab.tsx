import { useState } from "react";

const tabs = ["hotels", "motels", "resorts"];

const HotelResultsTab = () => {
  const [currTab, setCurrTab] = useState(tabs[0]);

  const handleCurrTab = (value: string) => {
    setCurrTab(value);
  };

  return (
    <div className="resultContent__tabs">
      <button
        id={tabs[0]}
        onClick={() => handleCurrTab(tabs[0])}
        className={`resultContent__tabs__item ${
          currTab === tabs[0] && "active"
        }`}
      >
        <div className="resultContent__tabs__item__title">Hotels</div>
        <div className="resultContent__tabs__item__desc">210 places</div>
        <span />
      </button>
      <div className="resultContent__tabs__divider" />
      <button
        id={tabs[1]}
        onClick={() => handleCurrTab(tabs[1])}
        className={`resultContent__tabs__item ${
          currTab === tabs[1] && "active"
        }`}
      >
        <div className="resultContent__tabs__item__title">Motels</div>
        <div className="resultContent__tabs__item__desc">54 places</div>
        <span />
      </button>
      <div className="resultContent__tabs__divider" />
      <button
        id={tabs[2]}
        onClick={() => handleCurrTab(tabs[2])}
        className={`resultContent__tabs__item ${
          currTab === tabs[2] && "active"
        }`}
      >
        <div className="resultContent__tabs__item__title">Resorts</div>
        <div className="resultContent__tabs__item__desc">72 places</div>
        <span />
      </button>
    </div>
  );
};

export default HotelResultsTab;
