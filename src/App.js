import React from "react";

import Intro from "./components/pages/intro";

//import NavBar from "./components/navbar/navbar";
import NavBar from "./components/navbar/navbar-try";
import ProductGrid from "./components/product/productgrid";
import Footer from "./footer/footer";
import MeetTheTeam from "./components/pages/team";
import WhoWeAre from "./components/pages/whoweare";
import Partners from "./components/pages/partners";
import Carousel from "./components/product/carousel";
//import Footer from "./components/footer/footer";
//import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <ProductGrid />
      <WhoWeAre />
      <MeetTheTeam />
      <Partners />
      <Footer />
    </div>
  );
}
export default App;
