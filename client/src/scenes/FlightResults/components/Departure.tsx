import { useState } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const marks = [
  {
    value: 12,
    label: (
      <Typography
        sx={{ marginLeft: "35px", fontSize: "15px", color: "#112211" }}
      >
        12Am
      </Typography>
    ),
  },
  {
    value: 20,
    label: (
      <Typography
        sx={{ marginRight: "40px", fontSize: "15px", color: "#112211" }}
      >
        20Pm
      </Typography>
    ),
  },
];

function valuetext(value: number) {
  return `${value}Am`;
}

const Departure = () => {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="filters__options__item">
      <button onClick={handleShow} className="filters__options__item__header">
        <div className="filters__options__item__header__text">
          Departure Time
        </div>
        <IonIcon
          icon={isShow ? chevronUpOutline : chevronDownOutline}
          style={{ fontSize: "20px" }}
        />
      </button>
      {isShow && (
        <div className="filters__options__item__content">
          <Box sx={{ width: "100%" }}>
            <Slider
              aria-label="Always visible"
              defaultValue={15}
              getAriaValueText={valuetext}
              step={1}
              marks={marks}
              min={12}
              max={20}
              valueLabelDisplay="auto"
              sx={{ color: "#8dd3bb" }}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Departure;
