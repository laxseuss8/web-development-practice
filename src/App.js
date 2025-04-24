import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/main/MainPage";
import Facility360 from "./solutions/Facility-360";
import DigitalTwin from "./solutions/DigitalTwin";
import AboutUs from "./components/main/AboutUs";
import EnergyAuditOptimize from "./solutions/EnergyAuditOptimize";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/solutions/energy&facilities/facility360"
          element={<Facility360 />}
        />
        <Route
          path="/solutions/energy&facilities/digitwin"
          element={<DigitalTwin />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/energy&facilities/energyaudit-optimize"
          element={<EnergyAuditOptimize />}
        />
      </Routes>
    </div>
  );
}
export default App;
