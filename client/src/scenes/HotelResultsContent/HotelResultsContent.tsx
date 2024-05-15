import "../../sass/scenes/_searchResultsContent.scss";

import { hotelsResult } from "../../data/hotels";

import HotelResultsTab from "./components/HotelResultsTab";
import HotelResultItem from "../../components/HotelResultItem";

import { filterOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { useDispatch } from "react-redux";
import { setFilterBtnOpen } from "../../redux/appSlice";

const HotelResultsContent = () => {
  const dispatch = useDispatch();

  const handleFilterOpen = () => {
    dispatch(setFilterBtnOpen(true));
  };

  return (
    <div className="resultContent">
      <HotelResultsTab />
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
        {hotelsResult.map((hotel) => (
          <HotelResultItem key={hotel.id} {...hotel} />
        ))}
      </div>
      <button className="resultContent__moreBtn">See more results</button>
    </div>
  );
};

export default HotelResultsContent;
