import { Route, Routes } from "react-router-dom";

import Layout from "./shared/layout";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
