import { Menus } from "./utils";
import { Link } from "react-router-dom";
import DesktopMenu from "./desktopmenu-try";
import MobMenu from "./mobmenu";
import Logo from "../../assets/images/telkhalogo-no-bg.png";
import QAS from "../../assets/images/qas_logo.jpg";

export default function NavBar() {
  return (
    <div>
      <header className="h-14 text-[15px] fixed inset-0 flex-center bg-primary z-[100] drop-shadow-md ">
        <nav className=" px-4 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-2 z-[999] relative">
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
            <Link to="/" className="ml-5 flex items-center">
              <img
                src={Logo}
                alt="Telkha Logo"
                className="h-12 w-auto hover:scale-105 transition-all"
              />
            </Link>
          </div>

          <ul className="gap-x-4 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
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
