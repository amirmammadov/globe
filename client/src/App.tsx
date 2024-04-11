import { useState } from "react";

import { createTheme, ThemeProvider, Box } from "@mui/material";

import { useTranslation } from "react-i18next";

const App = () => {
  const [t, i18n] = useTranslation("global");
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <div>{t("title")}</div>
        <button onClick={() => handleLangChange("az")}>AZ</button>
        <button onClick={() => handleLangChange("en")}>EN</button>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          Change theme
        </button>
      </Box>
    </ThemeProvider>
  );
};

export default App;
