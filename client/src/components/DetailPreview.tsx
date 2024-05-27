import "../sass/components/_detailPreview.scss";

import { location, heartOutline, shareSocial, star } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

interface IProps {
  hasStar?: boolean;
}

const DetailPreview = ({ hasStar }: IProps) => {
  return (
    <div className="detail__preview">
      <div className="detail__preview__header">
        <div className="detail__preview__header__title">
          Emirates A380 Airbus
        </div>
        {hasStar && (
          <div className="detail__preview__header__star">
            <IonIcon icon={star} />
            <IonIcon icon={star} />
            <p className="detail__preview__header__star__text">2 star hotel</p>
          </div>
        )}

        <div className="detail__preview__header__price">$240</div>
      </div>
      <div className="detail__preview__location">
        <IonIcon icon={location} style={{ fontSize: "18px" }} />
        <div className="detail__preview__location__text">
          Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
        </div>
      </div>
      <div className="detail__preview__actions">
        <div className="detail__preview__actions__rating">
          <div className="detail__preview__actions__rating__total">4.2</div>
          <div className="detail__preview__actions__rating__case">
            Very good
          </div>
          <div className="detail__preview__actions__rating__count">
            45 reviews
          </div>
        </div>
        <div className="detail__preview__actions__btns">
          <button className="detail__preview__actions__btns__love">
            <IonIcon icon={heartOutline} style={{ fontSize: "20px" }} />
          </button>
          <button className="detail__preview__actions__btns__share">
            <IonIcon icon={shareSocial} style={{ fontSize: "20px" }} />
          </button>
          <button className="detail__preview__actions__btns__buy">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPreview;
