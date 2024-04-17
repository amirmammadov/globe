import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <div>{t("header.btn1")}</div>
      <select name="lang" onChange={(e) => handleLangChange(e.target.value)}>
        <option value="en">EN</option>
        <option value="az">AZ</option>
      </select>
    </div>
  );
};

export default Header;
