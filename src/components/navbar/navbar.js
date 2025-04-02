import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/telkhalogo-no-bg.png";
import QAS from "../../assets/images/qas_logo.jpg";

import DesktopMenu from "./desktopmenu";
import SmallMenu from "./smallmenu";
import { Menus } from "./utils";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const submenuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(
        !(currentScrollY > lastScrollY.current && currentScrollY > 200)
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  useEffect(() => {
    return () => clearTimeout(submenuTimeoutRef.current);
  }, []);

  return (
    <header
      className={`flex justify-between items-center py-6 px-8 md:px-32
      h-20 text-[15px] bg-primary top-0 z-[100] drop-shadow-md 
      transition-transform duration-400 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="ml-5 flex items-center">
        <img
          src={Logo}
          alt="Telkha Logo"
          className="h-16 w-auto hover:scale-105 transition-all"
        />
      </Link>

      {/* Navigation Menu (Only for Desktop) */}
      <ul
        className="flex-center xl:flex gap-12 font-semibold 
      text-base gap-x-0 hidden"
      >
        {Menus.map((menu, index) => (
          <li
            key={index}
            className="p-3 hover:bg-sky-400 hover:text-white 
            rounded-md transition-all cursor-pointer"
            onMouseEnter={() => handleMouseEnter(menu)}
            onMouseLeave={handleMouseLeave}
          >
            <DesktopMenu
              menu={menu}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />

            {/* Submenu */}
            {activeMenu === menu && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg w-56"
                onMouseEnter={() => clearTimeout(submenuTimeoutRef.current)}
                onMouseLeave={handleMouseLeave}
              >
                <ul>
                  {menu.submenu?.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 px-4 hover:bg-gray-200">
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* QAS Logo (Right Side) */}
      <a
        href="https://www.qas-international.com/en/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
      >
        <img
          src={QAS}
          alt="QAS LOGO"
          className="w-20 h-auto p-0 cursor-pointer"
        />
      </a>
    </header>
  );
}
