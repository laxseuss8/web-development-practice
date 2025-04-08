import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import { SubMenuData } from "./Utilities";
import MarketSubMenu from "./MarketSubMenu";
import SolutionSubMenu from "./SolutionSubMenu";

import Logo from "../../assets/images/telkhalogo-no-bg.png";
import QAS from "../../assets/images/qas_logo.jpg";

export default function NavBar() {
  return (
    <div>
      <header
        className="h-16 text-[17px] fixed inset-0 flex-center bg-white/75 z-[100] drop-shadow-xl 
      backdrop-blur-sm "
      >
        <nav className=" px-4 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-4 z-[999] relative">
            <div className="lg:hidden">
              {/* Mobile Menu */}
              <MobileMenu Menus={SubMenuData} />
            </div>
            {/*  Company Logo */}
            <Link
              to="/"
              alt="Company Logo"
              className="ml-2 flex items-center cursor-pointer"
            >
              <img
                src={Logo}
                alt="Telkha Logo"
                className="h-14 w-auto hover:scale-105 transition-all"
              />
            </Link>
          </div>

          {/*  DesktopMenu Drawer */}
          <ul className="gap-x-12 lg:flex-center hidden text-lg font-semibold text-white">
            <SolutionSubMenu />
            <MarketSubMenu />
          </ul>

          {/* QAS Logo (Right Side) */}
          <a
            href="https://www.qas-international.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-auto w-auto hover:scale-105 transition-all"
          >
            <img src={QAS} alt="QAS LOGO" className="w-16 cursor-pointer" />
          </a>
        </nav>
      </header>
    </div>
  );
}
