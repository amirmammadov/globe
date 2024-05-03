import "../../sass/scenes/_map.scss";

import SectionTitle from "../../components/SectionTitle";

import { useTranslation } from "react-i18next";

const Map = () => {
  const t = useTranslation("global")[0];

  return (
    <section className="flights__map">
      <SectionTitle
        title={t("flights.map.title")}
        desc={t("flights.map.desc")}
        btnText={t("flights.map.btnText")}
        link="result"
      />
      <div className="flights__map__img">
        <img src="/assets/flights/map.png" alt="map" />
      </div>
    </section>
  );
};

export default Map;
