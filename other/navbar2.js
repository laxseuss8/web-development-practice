import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import DesktopMenu from "../src/components/navbar/desktopmenu";
import { Menus } from "../src/components/navbar/utils";
import Logo from "../../assets/images/telkhalogo.png";

const NavBar = ({ menu }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let searchBarTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar immediately
        setIsNavVisible(false);

        // Hide search bar only AFTER the navbar is fully gone
        searchBarTimeout = setTimeout(() => {
          setIsSearchVisible(false);
        }, 200); // 300ms delay after navbar disappears
      } else {
        // Show navbar immediately when scrolling up
        setIsNavVisible(true);

        // Show search bar only AFTER the navbar is fully visible
        searchBarTimeout = setTimeout(() => {
          setIsSearchVisible(true);
        }, 200); // 200ms delay for smooth appearance
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(searchBarTimeout);
    };
  }, [lastScrollY]);

  return (
    <header>
      {/* Navbar Section */}
      <div
        className={`h-20 text-[18px] fixed inset-0 flex-center 
        bg-primary top-0 right-0 left-0 z-[100] shadow-md py-4 
        transition-transform duration-500 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="relative px-10 flex-center-between w-full max-w-6xl mx-auto hidden z-[90]">
          <Link to="/" className="bg-white py-1 px-1 rounded">
            <img src={Logo} alt="Telkha Logo" className="size-13" />
          </Link>

          {/* Desktop menu */}
          <ul className="lg:flex-center hidden gap-x-3">
            {Menus.map((menu, index) => (
              <DesktopMenu
                key={index}
                menu={menu}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            ))}
          </ul>

          {/* Shopping Cart */}
          <Link
            to="/cart"
            className="absolute top-1/2 -translate-y-1/2 right-1"
          >
            <ShoppingCart
              size={40}
              className="cursor-pointer bg-secondary p-2 rounded-full shadow-lg"
            />
          </Link>
        </nav>
      </div>

      {/* Search Bar Section */}
      <div
        className={`fixed top-20 flex justify-between items-center 
        right-0 left-0 mx-auto md:py-8 py-1 px-5 bg-black bg-opacity-40 
        shadow-md z-[50] w-screen transition-transform duration-500 ${
          isSearchVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-center items-center w-full relative">
          <form className="w-1/3">
            <input
              type="text"
              placeholder="Telkha Search Product...."
              className="bg-white rounded-md border-1 py-2 px-3 w-full 
              md:border-green-600 shadow-md text-black caret-black 
              placeholder-opacity-100"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
