import { useState } from "react";

import { IonIcon } from "@ionic/react";

interface IProps {
  title: string;
  values: string[];
}

const WithChecks = ({ values, title }: IProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="filters__options__item">
      <button onClick={handleShow} className="filters__options__item__header">
        <div className="filters__options__item__header__text">{title}</div>
        <IonIcon
          name={`chevron-${isShow ? "up" : "down"}-outline`}
          style={{ fontSize: "20px" }}
        />
      </button>
      {isShow && (
        <div className="filters__options__item__content">
          <div className="filters__options__item__content__checks">
            {values.map((value, index) => (
              <div
                key={index}
                className="filters__options__item__content__checks__item"
              >
                <input
                  type="checkbox"
                  className="filters__options__item__content__checks__item__input"
                />
                <div className="filters__options__item__content__checks__item__text">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WithChecks;
