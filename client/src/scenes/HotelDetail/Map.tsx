import "../../sass/scenes/_map.scss";

import { locationOfCity } from "../../constants/location";

import { locationSharp } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Map = () => {
  return (
    <div className="map">
      <div className="map__header">
        <div className="map__header__title">Location/Map</div>
        <button className="map__header__btn">View on google maps</button>
      </div>
      <div className="map__info">
        <div className="map__info__area">
          <iframe
            src={locationOfCity}
            loading="lazy"
            className="map__info__area__iframe"
          ></iframe>
        </div>
        <div className="map__info__location">
          <IonIcon icon={locationSharp} style={{ fontSize: 18 }} />
          <p>Gümüşsuyu Mah. İnönü Cad. No:8, Istanbul 243141</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
