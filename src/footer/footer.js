import React from "react";
import { Facebook, Mail, LinkedinIcon, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/telkhalogo-no-bg.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link to="/">
                <img
                  className="w-auto h-12 hover:"
                  src={Logo}
                  alt="Telkha Logo"
                />
              </Link>
              <p className="max-w-sm mt-2 text-gray-600 dark:text-gray-400">
                7F Highstreet South Corporate Plaza Tower 1, 26th street corner
                9th Avenue, The Fort, Taguig, Philippines
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="https://www.facebook.com/Telkhanetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <Facebook size={32} />
                </a>

                <a
                  href="https://www.linkedin.com/company/telkha-network-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={32} />
                </a>

                <a
                  href="https://www.instagram.com/telkhainc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Instagram"
                >
                  <Instagram size={32} />
                </a>

                <a
                  href="mailto:hrsupport@telkha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="MailMe"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>
          {/* Column 1: Company Info */}
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Pages
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Services
                </a>
              </div>
              {/* Column 2: Navigation Links */}
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Product Documentation
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Software downloads
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Services
                </a>
              </div>
              {/* Column 3: Products */}
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About Us
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Mission and Vision
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Company Culture
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Meet the Team
                </a>
              </div>

              {/* Column 4: Contact Us */}
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact Us
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  hrsupport@telkha.com
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  hrbp@telkha.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
        <div>
          <p className="text-center text-gray-600 dark:text-gray-400">
            © Telkha Network Inc. - All rights reserved
          </p>
          <p className="text-center text-gray-600 dark:text-gray-400 text-xs">
            Technology | Solutions | Build
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
