import "../sass/scenes/_hotelInputs.scss";

import OptionsInput from "../components/OptionsInput";
import DatePicker from "../components/DatePicker";

import { destinations, rooms, guests } from "../constants";

const HotelInputs = () => {
  return (
    <div className="search__hotel__inputs">
      <div className="search__hotel__inputs__item">
        <OptionsInput
          options={destinations}
          holder="Enter Destination"
          keyValue="destination"
        />
      </div>
      <div className="search__hotel__inputs__item date">
        <DatePicker holder="Check In" keyValue="checkIn" />
      </div>
      <div className="search__hotel__inputs__item date">
        <DatePicker holder="Check Out" keyValue="checkOut" />
      </div>
      <div className="search__hotel__inputs__item">
        <OptionsInput options={rooms} holder="Rooms" keyValue="rooms" />
        <OptionsInput options={guests} holder="Guests" keyValue="guests" />
      </div>
    </div>
  );
};

export default HotelInputs;
