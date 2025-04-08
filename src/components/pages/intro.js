import React from "react";
import VideoBg from "../../assets/videos/video-intro.mp4";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[10]">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={VideoBg} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 md:px-16 p-4 mx-auto mt-20 py-25">
        <div className="bg-black bg-opacity-50 rounded-lg rounded-br-[60px] md:p-9 px-5 py-11">
          <div className="flex flex-col items-start">
            {/* Banner Content */}
            <div>
              <h2 className="md:text-4xl text-2xl font-bold text-white mb-4 leading-relaxed">
                Flexibility and Quality
              </h2>
              <p className="text-[#EBEBEB] text-lg mb-4">
                At Telkha, we are conscious and committed to upholding
                high-quality workmanship in all aspects of the business. We
                understand every client's uniqueness, which is why we adapt our
                services to suit their specific needs and preferences.
              </p>
              <div className="space-x-4 space-y-2">
                <Link to="/about-us">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Learn about us!
                  </button>
                </Link>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                  I want to purchase.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
