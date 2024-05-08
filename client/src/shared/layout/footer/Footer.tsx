import "../../../sass/layout/_footer.scss";

import { Link } from "react-router-dom";

import { footerData } from "../../../data/footer";

import { logoFacebook, logoInstagram, logoYoutube } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import FooterColumn from "../../../components/FooterColumn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <div className="footer__logo__icon">
          <img src="/assets/icons/logo-footer.png" alt="logo" />
        </div>
        <div className="footer__logo__social">
          <Link to="#">
            <IonIcon icon={logoFacebook} />
          </Link>
          <Link to="#">
            <IonIcon icon={logoInstagram} />
          </Link>
          <Link to="#">
            <IonIcon icon={logoYoutube} />
          </Link>
        </div>
      </div>
      <div className="footer__content">
        {footerData.map((footerItem) => (
          <FooterColumn key={footerItem.id} {...footerItem} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
