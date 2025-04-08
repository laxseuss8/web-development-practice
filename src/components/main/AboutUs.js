import React from "react";
import Partners from "../pages/partners";
import Team from "../pages/team";
import WhoWeAre from "../pages/whoweare";
import NavBar from "../navbar/NavigationBar";
import Footer from "../../footer/footer";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <WhoWeAre />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
};

export default AboutUs;
