import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function DesktopMenu({ menu, activeMenu, setActiveMenu }) {
  const [submenuHovered, setSubmenuHovered] = useState(false);
  const isOpen = activeMenu === menu.name;
  const hasSubMenu = menu?.subMenu?.length > 0;

  // Show submenu instantly when hovering a menu item
  const handleMouseEnter = () => {
    setActiveMenu(menu.name); // Set the active menu immediately
  };

  // Close submenu only if no other menu is hovered
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!submenuHovered && activeMenu === menu.name) {
        setActiveMenu(null);
      }
    }, 200); // Small delay to allow smooth switching
  };

  return (
    <motion.li
      className="relative group/link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="flex-center gap-2 cursor-pointer px-2 py-4 rounded-md
      hover:bg-white/5"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            className={`duration-500 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </span>

      {hasSubMenu && (
        <motion.div
          className={`absolute top-full left-1/2 translate-x-[-50%] mt-5 bg-white 
            shadow-lg p-0 rounded-md w-60 ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setSubmenuHovered(true)}
          onMouseLeave={() => {
            setSubmenuHovered(false);
            handleMouseLeave();
          }}
        >
          <ul className="flex flex-col space-y-1">
            {menu.subMenu.map((subMenu, i) => (
              <li
                key={i}
                className="cursor-pointer hover:bg-gray-300 p-3 rounded-md flex items-center gap-2"
              >
                {subMenu?.icon && (
                  <div className="bg-slate-500 p-4 rounded-md">
                    {React.createElement(subMenu.icon)}
                  </div>
                )}
                <div>
                  <h6 className="text-black font-medium">{subMenu?.name}</h6>
                  <p className="text-xs text-black">{subMenu?.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.li>
  );
}
