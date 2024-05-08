import { useState } from "react";

import { IonIcon } from "@ionic/react";

const Rating = () => {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="filters__options__item">
      <button onClick={handleShow} className="filters__options__item__header">
        <div className="filters__options__item__header__text">Rating</div>
        <IonIcon
          name={`chevron-${isShow ? "up" : "down"}-outline`}
          style={{ fontSize: "20px" }}
        />
      </button>
      {isShow && (
        <div className="filters__options__item__content">
          <div className="filters__options__item__content__rating">
            <div className="filters__options__item__content__rating__item">
              0+
            </div>
            <div className="filters__options__item__content__rating__item">
              1+
            </div>
            <div className="filters__options__item__content__rating__item">
              2+
            </div>
            <div className="filters__options__item__content__rating__item">
              3+
            </div>
            <div className="filters__options__item__content__rating__item">
              4+
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
