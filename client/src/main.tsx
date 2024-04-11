import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import state from "./state/index";

// import { ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import en from "./lang/en/en.json";
import az from "./lang/az/az.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: en,
    },
    az: {
      global: az,
    },
  },
});

// const darkTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={state}>
        {/* <ThemeProvider theme={darkTheme}> */}
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
        {/* </ThemeProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
