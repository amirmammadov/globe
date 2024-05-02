import "../../../sass/layout/_footer.scss";

import { Link } from "react-router-dom";

import { footerData } from "../../../data/footer";

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
            <img src="/assets/social/fb.png" alt="fb" />
          </Link>
          <Link to="#">
            <img src="/assets/social/ins.png" alt="ins" />
          </Link>
          <Link to="#">
            <img src="/assets/social/youtube.png" alt="youtube" />
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
