import { useState } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import { IonIcon } from "@ionic/react";

const marks = [
  {
    value: 50,
    label: (
      <Typography
        sx={{ marginLeft: "24px", fontSize: "15px", color: "#112211" }}
      >
        $50
      </Typography>
    ),
  },
  {
    value: 1200,
    label: (
      <Typography
        sx={{ marginRight: "40px", fontSize: "15px", color: "#112211" }}
      >
        $1200
      </Typography>
    ),
  },
];

function valuetext(value: number) {
  return `$${value}`;
}

const Price = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="filters__options__item">
      <button onClick={handleShow} className="filters__options__item__header">
        <div className="filters__options__item__header__text">Price</div>
        <IonIcon
          name={`chevron-${isShow ? "up" : "down"}-outline`}
          style={{ fontSize: "20px" }}
        />
      </button>
      {isShow && (
        <div className="filters__options__item__content">
          <Box sx={{ width: "100%" }}>
            <Slider
              aria-label="Always visible"
              defaultValue={600}
              getAriaValueText={valuetext}
              step={10}
              marks={marks}
              min={50}
              max={1200}
              valueLabelDisplay="auto"
              sx={{ color: "#8dd3bb" }}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Price;
