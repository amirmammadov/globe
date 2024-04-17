import "../../../sass/layout/_header.scss";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="header">
      <div className="header__buttons">
        <Link to="/flights" className="header__buttons__item">
          <img
            src="./assets/icons/airplane.png"
            alt="plane"
            className="header__buttons__item__img"
          />
          <p className="header__buttons__item__text">{t("header.btn1")}</p>
        </Link>
        <Link to="/hotels" className="header__buttons__item">
          <img
            src="./assets/icons/bed.png"
            alt="bed"
            className="header__buttons__item__img"
          />
          <p className="header__buttons__item__text">{t("header.btn2")}</p>
        </Link>
      </div>
      <button className="header__logo">
        <img
          src="./assets/icons/logo-light.png"
          alt="logo"
          className="header__logo__img"
        />
      </button>
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
    </header>
  );
};

export default Header;
