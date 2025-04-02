import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DesktopMenu({ menu, activeMenu, setActiveMenu }) {
  const isOpen = activeMenu === menu.name;
  const hasSubMenu = menu?.subMenu?.length > 0;

  // Handle menu click (toggle only this submenu)
  const handleMenuClick = () => {
    setActiveMenu(isOpen ? null : menu.name);
  };

  // Animation settings
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.3 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.li className="relative">
      <span
        className="flex-center gap-2 cursor-pointer px-3 py-3 rounded-l relative"
        onClick={handleMenuClick} // Toggle on click
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            className={`duration-300 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </span>

      {hasSubMenu && isOpen && (
        <motion.div
          className="absolute left-0 top-full bg-[#0d1b48] p-3 rounded-md shadow-lg w-56"
          initial="exit"
          animate="enter"
          variants={subMenuAnimate}
        >
          <div className="flex flex-col space-y-2">
            {menu.subMenu.map((subMenu, i) => (
              <div
                key={i}
                className="cursor-pointer hover:bg-white/10 p-2 rounded-md"
              >
                <div className="flex items-center gap-x-2">
                  <div className="bg-slate-100/30 w-fit p-2 rounded-md">
                    {subMenu?.icon && <subMenu.icon />}
                  </div>
                  <div>
                    <h6 className="text-white">{subMenu?.name}</h6>
                    <p className="text-xs text-gray-300">{subMenu?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
