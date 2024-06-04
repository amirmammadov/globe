import "../../sass/pages/_hotelDetail.scss";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import DetailPreview from "../../components/DetailPreview";
import HotelImgs from "../../scenes/HotelDetail/HotelImgs";
import Overview from "../../scenes/HotelDetail/Overview";
import Rooms from "../../scenes/HotelDetail/Rooms";

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

const HotelDetail = () => {
  return (
    <div className="hotel__detail">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <DetailPreview hasStar />
      <HotelImgs />
      <Overview />
      <Rooms />
    </div>
  );
};

export default HotelDetail;
