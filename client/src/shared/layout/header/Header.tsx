import { useState, useEffect } from "react";
import "../../../sass/layout/_header.scss";

import { useTranslation } from "react-i18next";

import { Link, useLocation } from "react-router-dom";

import { IonIcon } from "@ionic/react";

const types = ["/flights", "/hotels"];

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [menuActive, setMenuActive] = useState(false);
  const [activePage, setActivePage] = useState("/");

  const location = useLocation();

  useEffect(() => {
    setMenuActive(false);
    setActivePage(location.pathname);
  }, [location]);

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="header">
      <div className="header__buttons">
        <Link
          to="/flights"
          className={`header__buttons__item ${
            activePage === types[0] && "active"
          }`}
        >
          <IonIcon name="airplane" />
          <p className="header__buttons__item__text">{t("header.btn1")}</p>
        </Link>
        <Link
          to="/hotels"
          className={`header__buttons__item ${
            activePage === types[1] && "active"
          }`}
        >
          <IonIcon name="bed" />
          <p className="header__buttons__item__text">{t("header.btn2")}</p>
        </Link>
      </div>
      <Link to="/" className="header__logo">
        <img
          src="./assets/icons/logo-light.png"
          alt="logo"
          className="header__logo__img"
        />
      </Link>
      <div className="header__extra">
        <select
          name="lang"
          onChange={(e) => handleLangChange(e.target.value)}
          className="header__extra__lang"
        >
          <option value="en" className="header__extra__lang__option">
            EN
          </option>
          <option value="az" className="header__extra__lang__option">
            AZ
          </option>
        </select>
        <Link to="#" className="header__extra__login">
          {t("header.login")}
        </Link>
      </div>
      <button
        className={`header__hamburger__btn ${menuActive && "active"}`}
        onClick={() => setMenuActive((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      {menuActive && (
        <div className="header__menu">
          <Link to="/flights" className="header__menu__item">
            {t("header.btn1")}
          </Link>
          <Link to="/hotels" className="header__menu__item">
            {t("header.btn2")}
          </Link>
          <Link to="#" className="header__menu__item">
            {t("header.login")}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
