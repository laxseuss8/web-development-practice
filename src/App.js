import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/main/MainPage";
import Facility360 from "./solutions/facility360";
import DigitalTwin from "./solutions/digitwin";
import AboutUs from "./components/main/AboutUs";
import SolutionSubMenuTest from "./components/navbar/SolutionSubMenu";

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
      </Routes>
    </div>
  );
}
export default App;
