import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { MyHeader, MyStack } from "./header.styled";

import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [curLang, setCurLang] = useState("en");

  const handleLangChange = (event: SelectChangeEvent) => {
    setCurLang(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <MyHeader>
      <MyStack>
        <Box>{t("title")}</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={curLang}
              label={"AZ"}
              onChange={handleLangChange}
            >
              <MenuItem value="az">AZ</MenuItem>
              <MenuItem value="en">EN</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </MyStack>
    </MyHeader>
  );
};

export default Header;
