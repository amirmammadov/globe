import { Route, Routes } from "react-router-dom";

import Layout from "./shared/layout";
import Landing from "./pages/landing/Landing";
import Flights from "./pages/flights/Flights";
import Hotels from "./pages/hotels/Hotels";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Layout>
  );
};

export default App;
