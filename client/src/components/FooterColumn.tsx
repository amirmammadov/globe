import { Link } from "react-router-dom";

interface IProps {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: IProps) => {
  return (
    <div className="footer__content__col">
      <div className="footer__content__col__title">{title}</div>
      <div className="footer__content__col__links">
        {links.map((link, index) => (
          <Link
            key={index}
            to="#"
            className="footer__content__col__links__item"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
