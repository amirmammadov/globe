import "../../sass/scenes/_flightPreview.scss";

import { location, heartOutline, shareSocial } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Preview = () => {
  return (
    <div className="flight__detail__preview">
      <div className="flight__detail__preview__header">
        <div className="flight__detail__preview__header__title">
          Emirates A380 Airbus
        </div>
        <div className="flight__detail__preview__header__price">$240</div>
      </div>
      <div className="flight__detail__preview__location">
        <IonIcon icon={location} style={{ fontSize: "18px" }} />
        <div className="flight__detail__preview__location__text">
          Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
        </div>
      </div>
      <div className="flight__detail__preview__actions">
        <div className="flight__detail__preview__actions__rating">
          <div className="flight__detail__preview__actions__rating__total">
            4.2
          </div>
          <div className="flight__detail__preview__actions__rating__case">
            Very good
          </div>
          <div className="flight__detail__preview__actions__rating__count">
            45 reviews
          </div>
        </div>
        <div className="flight__detail__preview__actions__btns">
          <button className="flight__detail__preview__actions__btns__love">
            <IonIcon icon={heartOutline} style={{ fontSize: "20px" }} />
          </button>
          <button className="flight__detail__preview__actions__btns__share">
            <IonIcon icon={shareSocial} style={{ fontSize: "20px" }} />
          </button>
          <button className="flight__detail__preview__actions__btns__buy">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
