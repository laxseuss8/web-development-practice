import React from "react";
import { Carousel } from "flowbite-react";

import NavBar from "../components/navbar/NavigationBar";
import Footer from "../footer/footer";

import hardware from "../assets/images/telkha-solutions/energy/hardware.png";
import software from "../assets/images/telkha-solutions/energy/software.png";
import VegaBg from "../assets/images/bg/vega.jpg";

const Facility360 = () => {
  return (
    <div className="h-screen w-full ">
      <img
        src={VegaBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-md"
      />
      <NavBar />
      <section
        className="relative mx-auto my-24 max-w-xl px-4 text-gray-800 md:max-w-screen-lg lg:px-2 
  bg-white/70 rounded-xl shadow-2xl p-4"
      >
        <header className="px-4 text-center md:mb-4 lg:text-left">
          <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
            Energy & Facilities
          </h2>
          <div className="border-t-4 my-4 border-green-600 pt-4"></div>
        </header>

        <div className="px-4 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="md:pt-4 lg:flex lg:flex-col lg:justify-center">
            <p className="text-center font-semibold text-indigo-800 md:text-left">
              TELKHA
            </p>

            <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              Facility360
            </h1>

            <p className="mb-6 text-gray-700 sm:text-md md:mb-8">
              An integrated facility management system designed for real-time
              monitoring and control of enterprise operations. It combines
              advanced IoT connectivity with physical security system
              integration, allowing businesses to monitor and manage their
              infrastructure remotely.
            </p>
            <div>
              <span className="solutionbadge">Energy & Facilities</span>
              <span className="productbadge">Energy & Facilities</span>
            </div>
          </div>

          <div className="relative h-80 md:h-80 rounded-lg shadow-lg overflow-hidden">
            <Carousel
              className="rounded-lg bg-gray-200"
              slide={false}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-8 bg-white"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src={hardware}
                alt="image 1"
                className="h-auto w-auto object-cover"
              />
              <img
                src={software}
                alt="image 2"
                className="h-auto w-auto object-cover"
              />
            </Carousel>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Facility360;
