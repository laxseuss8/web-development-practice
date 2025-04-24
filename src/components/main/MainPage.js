import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../navbar/NavigationBar";
import Intro from "../pages/intro";
import ProductGrid from "../product/productgrid";
import Footer from "../../footer/footer";
import WhoWeAre from "../pages/whoweare";
import Partners from "../pages/partners";
import SolutionsList from "../pages/SolutionsList";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <SolutionsList />
      <WhoWeAre />
      <Partners />
      <Footer />
    </div>
  );
};

export default MainPage;
