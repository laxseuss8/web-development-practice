import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { SubMenuData } from "./Utilities"; // ✅ Ensure this is correctly imported

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [clickedSubMenu, setClickedSubMenu] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClickedCategory(null);
    setClickedSubMenu(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <button className="lg:hidden z-[100] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Sidebar Menu */}
      <motion.div
        className={`fixed left-0 w-[25%] top-14 h-screen shadow-lg overflow-y-auto
        bg-primary backdrop-blur text-white p-1 z-100`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4 }}
      >
        <ul>
          {SubMenuData.map(({ category, subCategories }, categoryIndex) => {
            const isCategoryOpen = clickedCategory === categoryIndex;

            return (
              <li key={category}>
                {/* Category Level */}
                <span
                  className="flex items-center justify-between p-3 text-sm 
                  hover:bg-white/40 rounded-md cursor-pointer"
                  onClick={() =>
                    setClickedCategory(isCategoryOpen ? null : categoryIndex)
                  }
                >
                  {category}
                  <ChevronDown
                    className={`ml-auto size-4 ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>

                {/* Subcategory Level */}
                {isCategoryOpen &&
                  subCategories.map(
                    ({ subMenuHeading, subMenu, href }, subIndex) => {
                      const isSubMenuOpen = clickedSubMenu === subIndex;

                      return (
                        <div key={subMenuHeading} className="ml-4">
                          {href ? (
                            // Render as a simple link if there's an href (no dropdown)
                            <a
                              href={href}
                              className="flex items-center p-1 text-xs 
                hover:bg-white/30 rounded-md cursor-pointer"
                            >
                              {subMenuHeading}
                            </a>
                          ) : (
                            // Otherwise, render as a dropdown
                            <span
                              className="flex items-center justify-between p-1 
                text-xs hover:bg-white/30 rounded-md cursor-pointer"
                              onClick={() =>
                                subMenu.length > 0
                                  ? setClickedSubMenu(
                                      isSubMenuOpen ? null : subIndex
                                    )
                                  : null
                              }
                            >
                              {subMenuHeading}
                              {subMenu.length > 0 && (
                                <ChevronDown
                                  className={`ml-auto size-4 ${
                                    isSubMenuOpen ? "rotate-180" : ""
                                  }`}
                                />
                              )}
                            </span>
                          )}

                          {/* Render SubMenu only if it exists */}
                          {isSubMenuOpen && subMenu && subMenu.length > 0 && (
                            <motion.ul
                              initial="exit"
                              animate="enter"
                              exit="exit"
                              variants={subMenuDrawer}
                              className="ml-1"
                            >
                              {subMenu.map(({ name, icon: Icon, href }) => (
                                <li
                                  key={name}
                                  className="p-2 flex items-center gap-x-2 hover:bg-white/30 rounded-md text-xs cursor-pointer"
                                >
                                  {href ? (
                                    <a
                                      href={href}
                                      className="flex items-center gap-x-2 w-full"
                                    >
                                      {Icon && <Icon className="w-4 h-4" />}
                                      {name}
                                    </a>
                                  ) : (
                                    <>
                                      {Icon && <Icon className="w-4 h-4" />}
                                      {name}
                                    </>
                                  )}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </div>
                      );
                    }
                  )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
