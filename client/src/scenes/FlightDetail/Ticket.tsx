import "../../sass/scenes/_ticket.scss";

import { ITicket } from "../../types";

import {
  wifiOutline,
  returnDownBackOutline,
  returnUpForwardOutline,
  airplane,
  fastFoodOutline,
  headsetOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Ticket = ({
  type,
  airline,
  date,
  weekday,
  airlineImgUrl,
  model,
  totalTime,
  startPoint,
  startTime,
  endPoint,
  endTime,
}: // services,
ITicket) => {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__header__general">
          {type} {weekday}, {date}
        </div>
        <div className="ticket__header__duration">{totalTime}</div>
      </div>
      <div className="ticket__info">
        <div className="ticket__info__box">
          <div className="ticket__info__box__img">
            <img src={`/assets/airlines/${airlineImgUrl}`} alt="airline" />
          </div>
          <div className="ticket__info__box__content">
            <div className="ticket__info__box__content__airline">{airline}</div>
            <div className="ticket__info__box__content__model">{model}</div>
          </div>
        </div>
        <div className="ticket__info__icons">
          <IonIcon icon={wifiOutline} style={{ fontSize: "24px" }} />
          <IonIcon icon={fastFoodOutline} style={{ fontSize: "24px" }} />
          <IonIcon icon={headsetOutline} style={{ fontSize: "24px" }} />
        </div>
      </div>
      <div className="ticket__options">
        <div className="ticket__options__start">
          <div className="ticket__options__start__time">{startTime}</div>
          <div className="ticket__options__start__place">{startPoint}</div>
        </div>
        <div className="ticket__options__icons">
          <IonIcon icon={returnDownBackOutline} style={{ fontSize: "34px" }} />
          <IonIcon icon={airplane} style={{ fontSize: "34px" }} />
          <IonIcon icon={returnUpForwardOutline} style={{ fontSize: "34px" }} />
        </div>
        <div className="ticket__options__end">
          <div className="ticket__options__end__time">{endTime}</div>
          <div className="ticket__options__end__place">{endPoint}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
