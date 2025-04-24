import { React, useState, useEffect } from "react";

import Digi1 from "../assets/images/telkha-solutions/energy/digitaltwininfra.png";
import Digi2 from "../assets/images/telkha-solutions/energy/digitaltwininfra1.png";
import Digi3Inside from "../assets/images/telkha-solutions/energy/inside.png";
import Digi3Outside from "../assets/images/telkha-solutions/energy/outsideplant.png";

import NavBar from "../components/navbar/NavigationBar";
import Footer from "../footer/footer";

function DigitalTwin() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const products = [
    {
      id: 1,
      name: "DCIM with DT",
      description:
        "Unified Inventory Management Platform and Unifying All Physical & Logical Digital Infrastructure",
      image: Digi1,
      features: [
        "Fiber Internet, Ethernet Waves",
        "Data Centers Edge, Cloud, XConnects",
        "Subsea Cables, IP Transit, DWDM, Landing Stations",
        "Satelitte SFH/EFH, LEO/GEO, VSAT",
        "Towers, Fixed Wireless, Small Cells, DAS",
      ],
      stats: {},
      price: "",
    },
    {
      id: 2,
      name: "Outside Plant",
      description: "Control your physical network infrastructure.",
      image: Digi3Outside,
      features: [
        "Conduits, Poles, Manholes and Towers, Cables and Paths",
        "Passive and active equipment whether it's the core, distribution, or access network",
      ],
      stats: {},
      price: "",
    },
    {
      id: 3,
      name: "Inside Plant",
      description: "Control your site infrastructure",
      image: Digi3Inside,
      features: [
        "Monetization of current infrastructure",
        "Profitable Capacity Planning",
        "Faster go-to-market of new services",
      ],
      stats: {},
      price: "",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: Digi1,
      alt: "Digital Twin Platform",
    },
    {
      url: Digi2,
      alt: "Asset Management",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white/25">
      <NavBar />
      {/* Hero Section with Carousel */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-40"
          style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center h-full">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                TELKHA SOLUTIONS
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                DigiTwin Platform
              </h1>

              <p className="text-lg text-gray-800">
                A real-time inventory and asset tracking system designed to
                optimize enterprise facility management with dynamic modeling
                capabilities.
              </p>

              <div className="flex gap-3">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
                  Energy & Facilities
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Asset Management
                </span>
              </div>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.url}
                    alt={slide.alt}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: `translateX(${-100 * currentSlide}%)`,
                    }}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/30 rounded-full hover:bg-white/50 transition-all"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/30 rounded-full hover:bg-white/50 transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white/40 max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() =>
                setActiveProduct(
                  activeProduct === product.id ? null : product.id
                )
              }
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{product.price}</p>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(product.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-medium text-gray-500">
                        {key}
                      </div>
                      <div className="text-indigo-600 font-semibold">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expandable Features */}
                <div
                  className={`space-y-3 transition-all duration-300 ${
                    activeProduct === product.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <h4 className="font-medium text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
                    {activeProduct === product.id ? "Show Less" : "Learn More"}
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .product-card {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .feature-item {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
      <Footer />
    </div>
  );
}

export default DigitalTwin;
