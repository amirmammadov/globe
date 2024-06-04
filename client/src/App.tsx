import { Route, Routes } from "react-router-dom";

import Layout from "./shared/layout";

import {
  Flights,
  Landing,
  Hotels,
  FlightResults,
  HotelResults,
  FlightDetail,
  HotelDetail,
  NotFound,
} from "./pages/export";

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
        <Route path="/hotel-result/:id" element={<HotelDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
