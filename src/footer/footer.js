import { Facebook, Mail, LinkedinIcon, Instagram } from "lucide-react";
import React from "react";
import Logo from "../assets/images/telkhalogo-no-bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shadow-xl">
      {/* Footer Content - 4 Columns */}
      <div className="bg-white text-gray-800 py-2 border-t-2 border-gray-200">
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 px-5">
          {/* Column 1: Company Info */}
          <div>
            <img src={Logo} alt="Company Logo" className="my-0 h-12" />
            <p className="my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800">
              7F Highstreet South Corporate Plaza Tower 1, 26th street corner
              9th Avenue, The Fort, Taguig, Philippines
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h2 className="text-xl font-semibold mb-1">Pages</h2>
            <ul className="space-y-0">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h2 className="text-xl font-semibold mb-1">Products</h2>
            <ul className="space-y-0">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Product Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Software downloads
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div>
            <h2 className="text-xl font-semibold mb-1">About Us</h2>
            <ul className="space-y-0">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Mission and Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Company Culture
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary my-1 sm:text-xs md:text-sm lg:text-md text-light text-gray-800"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      {/* Footer Bottom Section */}
      <div className="bg-primary py-4 px-4">
        <div className="mx-auto flex flex-row justify-between">
          {/* Left Side: Copyright Section */}
          <div className="text-left">
            <p className="text-white font-bold text-sm">
              &copy; 2025{" "}
              <span className="text-white">Telkha Network Inc.</span> All rights
              reserved.
            </p>
            <p className="text-white/70 font-semibold text-xs">
              Technology | Solutions | Build
            </p>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Telkhanetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-md p-1 transition-all 
              duration-1000 hover:bg-gray-500"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://www.linkedin.com/company/telkha-network-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-md p-1 transition-all 
              duration-1000 hover:bg-gray-500"
            >
              <LinkedinIcon size={32} />
            </a>
            <a
              href="https://www.instagram.com/telkhainc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-md p-1 transition-all 
              duration-1000 hover:bg-gray-500"
            >
              <Instagram size={32} />
            </a>
            <a
              href="mailto:hrsupport@telkha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded-md p-1 transition-all 
              duration-1000 hover:bg-gray-500"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
