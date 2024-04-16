import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      sx={{ minHeight: "100vh" }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
