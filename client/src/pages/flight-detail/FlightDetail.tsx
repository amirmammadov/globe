import "../../sass/pages/_flightDetail.scss";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Preview from "../../scenes/FlightDetail/Preview";

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
    <main className="flight__detail">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Preview />
    </main>
  );
};

export default FlightDetail;
