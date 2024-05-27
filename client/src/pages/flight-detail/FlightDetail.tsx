import "../../sass/pages/_flightDetail.scss";

import { availableTickets } from "../../data/tickets";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import DetailPreview from "../../components/DetailPreview";
import FlightImgs from "../../scenes/FlightDetail/FlightImgs";
import Ticket from "../../scenes/FlightDetail/Ticket";

const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="#ff8682"
    href="#"
    sx={{ fontSize: 14 }}
  >
    Turkey
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="#ff8682"
    href="#"
    sx={{ fontSize: 14 }}
  >
    Istanbul
  </Link>,
  <Typography key="2" color="#79747e" sx={{ fontSize: 13 }}>
    CVK Park Bosphorus Hotel Istanbul
  </Typography>,
];

const FlightDetail = () => {
  return (
    <div className="flight__detail">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <DetailPreview />
      <FlightImgs />
      <div className="flight__detail__tickets">
        {availableTickets.map((ticket) => (
          <Ticket key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
};

export default FlightDetail;
