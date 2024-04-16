import { Route, Routes } from "react-router-dom";

import { PaletteMode, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

import { useSelector } from "react-redux";

import Layout from "./shared/layout";
import Home from "./pages/home/Home";

const App = () => {
  const mode = useSelector((state: { mode: PaletteMode }) => state.mode);

  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
