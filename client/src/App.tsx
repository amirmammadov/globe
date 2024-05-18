import { Route, Routes } from "react-router-dom";

import Layout from "./shared/layout";
import Landing from "./pages/landing/Landing";
import Flights from "./pages/flights/Flights";
import Hotels from "./pages/hotels/Hotels";
import FlightResults from "./pages/flight-results/FlightResults";
import HotelResults from "./pages/hotel-results/HotelResults";
import FlightDetail from "./pages/flight-detail/FlightDetail";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flight-results" element={<FlightResults />} />
        <Route path="/hotel-results" element={<HotelResults />} />
        <Route path="/flight-result/:id" element={<FlightDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
