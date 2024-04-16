import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { InputBase } from "@mui/material";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import KingBedIcon from "@mui/icons-material/KingBed";
import LoginIcon from "@mui/icons-material/Login";

import FormControlLabel from "@mui/material/FormControlLabel";

import { useDispatch } from "react-redux";
import { changeMode } from "../../../redux/appSlice";

import { MyHeader, MyStack, MaterialUISwitch, MyButton } from "./header.styled";

import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [curLang, setCurLang] = useState("en");
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    dispatch(changeMode());
  };

  const handleLangChange = (event: SelectChangeEvent) => {
    setCurLang(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <MyHeader>
      <MyStack>
        <Stack direction="row" spacing={2}>
          <MyButton variant="text" startIcon={<FlightTakeoffIcon />}>
            {t("header.btn1")}
          </MyButton>
          <MyButton
            variant="text"
            startIcon={<KingBedIcon />}
            className="active"
          >
            {t("header.btn2")}
          </MyButton>
        </Stack>
        <Box>
          <img src="./public/assets/icons/logo.png" alt="logo" />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <MyButton variant="text" className="active" startIcon={<LoginIcon />}>
            Login
          </MyButton>
          <Select
            value={curLang}
            onChange={handleLangChange}
            input={<InputBase style={{ border: "none" }} />}
          >
            <MenuItem value="az">AZ</MenuItem>
            <MenuItem value="en">EN</MenuItem>
          </Select>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={checked}
                onChange={handleChange}
              />
            }
            label={null}
          />
        </Box>
      </MyStack>
    </MyHeader>
  );
};

export default Header;
