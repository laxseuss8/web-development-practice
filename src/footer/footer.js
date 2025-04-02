import { Facebook, Mail, LinkedinIcon, Instagram } from "lucide-react";
import React from "react";
import Logo from "../assets/images/telkhalogo-no-bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-lg">
      {/* Footer Content - 4 Columns */}
      <div className="bg-primary text-white py-2">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-5">
          {/* Column 1: Company Info */}
          <div>
            <img src={Logo} alt="Company Logo" className="my-2" />
            <p className="text-sm mt-2 my-4">
              7F Highstreet South Corporate Plaza Tower 1, 26th street corner
              9th Avenue, The Fort, Taguig, Philippines
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Products</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400">
                  Product Documentation
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Software downloads
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400">
                  Mission and Vision
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Company Culture
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      {/* Footer Bottom Section */}
      <div className="bg-slate-900 py-6 px-4">
        <div className="mx-auto flex flex-row justify-between">
          {/* Left Side: Copyright Section */}
          <div className="text-left">
            <p className="text-white font-bold text-sm">
              Copyright &copy; 2025{" "}
              <span className="text-green-400">Telkha Network Inc.</span> All
              rights reserved.
            </p>
            <p className="text-gray-400 font-semibold text-sm">
              Take ownership in everything, and always give your{" "}
              <span className="text-green-400 opacity-50">101%</span>!
            </p>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Telkhanetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-md p-1 transition-all 
              duration-300 hover:bg-green-500 hover:text-white"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://www.linkedin.com/company/telkha-network-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-md p-1 transition-all 
              duration-300 hover:bg-green-500 hover:text-white"
            >
              <LinkedinIcon size={32} />
            </a>
            <a
              href="https://www.instagram.com/telkhainc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-md p-1 transition-all 
              duration-300 hover:bg-green-500 hover:text-white"
            >
              <Instagram size={32} />
            </a>
            <a
              href="mailto:hrsupport@telkha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-md p-1 transition-all 
              duration-300 hover:bg-green-500 hover:text-white"
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
